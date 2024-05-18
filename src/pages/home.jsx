import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import axios from "axios";
import About from "./about";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Stack,
  StackDivider,
  Box,
  Text,
} from "@chakra-ui/react";

function Home({ itemsPerPage = 4 }) {
  const [repo, setRepo] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("https://api.github.com/users/cetezin/repos").then((res) => {
      console.log(res.data);
      const myRepo = res.data;
      setRepo(myRepo);
    });
  }, []);

  function Repos({ myRepo }) {
    const [search, setSearch] = useState("");

    return (
      <div>
        <input
          type="text"
          placeholder="Search"
          className="search"
          onChange={(e) => setSearch(e.target.value)}
          style={{
            background: "#fff",
            color: "#000",
            width: "100%",
            height: "40px",
            marginBlockEnd: "10px",
            paddingInlineStart: "20px"
          }}
        />
        <div className="box">
          {myRepo
            .filter((repos) => {
              if (search === "") {
                return repos;
              } else if (
                repos.name.toLowerCase().includes(search.toLowerCase())
              ) {
                return repos;
              }
            })
            .map((repos, index) => {
              return (
                <div>
                  <Card className="card">
                    <CardHeader color="#fdd40a">
                      <Heading className="heading" size="md">
                        <h2>{repos.name}</h2>
                      </Heading>
                    </CardHeader>
                    <hr></hr>
                    <CardBody>
                      <Stack divider={<StackDivider />} spacing="4">
                        <Box>
                          <Heading color="hsla(160, 100%, 37%, 1)" size="xs">
                            Created: {repos.created_at}
                          </Heading>
                          <Text
                            color="hsla(160, 100%, 37%, 1)"
                            pt="2"
                            fontSize="sm"
                          >
                            {repos.description}
                          </Text>
                        </Box>
                      </Stack>
                    </CardBody>
                    <Link to={`/repo/` + repos.name}>
                      <button>details</button>
                    </Link>
                  </Card>
                </div>
              );
            })}
        </div>
      </div>
    );
  }

  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = repo.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(repo.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % repo.length;
    setItemOffset(newOffset);
  };

  return (
    <div>
      <div className="paginate-items">
        <Repos myRepo={currentItems} />
        <ReactPaginate
          className="paginate"
          breakLabel="..."
          nextLabel="Next"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="Previous"
          renderOnZeroPageCount={null}
        />
      </div>
    </div>
  );
}

export default Home;
