"use client";

import { UnsplashImage } from "@/models/unspalsh-image";
import Image from "next/image";
import { FormEvent, useState } from "react";
import { Alert, Button, Form, Spinner } from "react-bootstrap";
import styles from "./search/SearchPage.module.css";

export default function SearchPage() {
  const [searchResults, setSearchResults] = useState<UnsplashImage[] | null>(
    null
  );
  const [searchResultsLoading, setSearchResultsLoading] = useState(false);
  const [searchResultsLoadingIsError, setSearchResultsLoadingIsError] =
    useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const query = formData.get("query")?.toString().trim();

    if (query) {
      try {
        setSearchResults(null);
        setSearchResultsLoadingIsError(false);
        setSearchResultsLoading(true);
        const response = await fetch("/api/search?query=" + query);
        const images: UnsplashImage[] = await response.json();
        setSearchResults(images);
      } catch (error) {
        console.error(error);
        setSearchResultsLoadingIsError(true);
      } finally {
        setSearchResultsLoading(false);
      }
    }
  }
  return (
    <div>
      <Alert>
        This page <strong>fetches data client side.</strong> in order not to
        leak API credentials, the request is dent to a{" "}
        <span style={{ color: "mediumorchid" }}>NextJS </span>
        <strong>route handler</strong> that runs on the server. this route
        handler then fetches the data from the Unsplash API and returns it to
        the client.
      </Alert>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="search-input">
          <Form.Label>Search Query</Form.Label>
          <Form.Control
            name="query"
            placeholder="E.g cats, bikes, anime, ..."
          />
          <Button
            type="submit"
            className="mb-3"
            disabled={searchResultsLoading}
          >
            Search
          </Button>
        </Form.Group>
      </Form>
      <div className="d-flex flex-column align-items-center">
        {searchResultsLoading && <Spinner animation="border" />}
        {searchResultsLoadingIsError && (
          <p>Something went wrong, please try again</p>
        )}
        {searchResults?.length === 0 && <p>Nothing Found, Please try again.</p>}

        {searchResults && (
          <>
            {searchResults.map((image) => (
              <Image
                src={image.urls.raw}
                width={250}
                height={250}
                alt={image.description}
                key={image.urls.raw}
                className={styles.image}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
}
