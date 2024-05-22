import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import {
  Heading,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

function About() {
  const [repo, setRepo] = useState([]);
  const { repo_name } = useParams();

  useEffect(() => {
    axios
      .get(`https://api.github.com/repos/Cetezin/` + repo_name)
      .then((res) => {
        console.log(res.data);
        setRepo(res.data);
      });
  }, []);

  return (
    <div className="table">
      <TableContainer color="#fff">
        <Table variant="simple">
          <TableCaption color="#fff">{repo.name}</TableCaption>
          <Thead>
            <Tr>
              <Th color="#fff">Property</Th>
              <Th color="#fff">Value</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Language: </Td>
              <Td>{repo.language}</Td>
            </Tr>
            <Tr>
              <Td>Forks: </Td>
              <Td>{repo.forks}</Td>
            </Tr>
            <Tr>
              <Td>Date created: </Td>
              <Td>{repo.created_at}</Td>
            </Tr>
            <Tr>
              <Td>Allow forking:</Td>
              <Td>{repo.allow_forking ? "yes" : "no"}</Td>
            </Tr>
          </Tbody>
          <Tfoot>
            <Tr>
              <Td>Fork count:</Td>
              <Td>{repo.forks_count}</Td>
            </Tr>
            <Tr>
              <Td>Default branch:</Td>
              <Td>{repo.default_branch}</Td>
            </Tr>
            <Tr>
              <Td>URL:</Td>
              <Td>{repo.html_url}</Td>
            </Tr>
            <Tr>
              <Td>Description:</Td>
              <Td>{repo.description}</Td>
            </Tr>
            <Tr>
              <Td>Full name:</Td>
              <Td>{repo.full_name}</Td>
            </Tr>
            <Tr>
              <Td>Has issues:</Td>
              <Td>{repo.has_issues ? "yes" : "no"}</Td>
            </Tr>
            <Tr>
              <Td>Has wiki:</Td>
              <Td>{repo.has_wiki ? "yes" : "no"}</Td>
            </Tr>
            <Tr>
              <Td>Visibility:</Td>
              <Td>{repo.visibility}</Td>
            </Tr>
            <Tr>
              <Td>Watchers:</Td>
              <Td>{repo.watchers}</Td>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
      <Link to={"/"} style={{ color: "#fff", padding: "10px" }}>
        <button>Go Home</button>
      </Link>
    </div>
  );
}

export default About;
