import React from 'react';
import { PageProps, graphql } from 'gatsby';
import {
  Button,
  Text,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from '@chakra-ui/react';
import Link from '@/components/gatsby-link';
import Title from '@/components/Title';
import Layout from '@/components/layout';
import { useTable } from 'react-table';

function ReactTable({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  // Render the UI for your table
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

const Home: React.FC<PageProps> = ({ data }) => {
  const list = data.Table.edges;

  const columns = React.useMemo(
    () => [
      {
        Header: 'Name',
        columns: [
          {
            Header: 'First Name',
            accessor: 'firstName',
          },
          {
            Header: 'Last Name',
            accessor: 'lastName',
          },
        ],
      },
      {
        Header: 'Info',
        columns: [
          {
            Header: 'Age',
            accessor: 'age',
          },
          {
            Header: 'Visits',
            accessor: 'visits',
          },
          {
            Header: 'Status',
            accessor: 'status',
          },
          {
            Header: 'Profile Progress',
            accessor: 'progress',
          },
        ],
      },
    ],
    [],
  );

  const data2 = React.useMemo(() => makeData(20), []);

  return (
    <Layout title="Hello World">
      <Title>Compare Now</Title>
      <Text>A Chakra UI starter for GatsbyJS.</Text>
      <Link to="https://twitter.com/desktopofsamuel">
        <Button>Follow me on Twitter</Button>
      </Link>
      <Table variant="simple">
        {list.map((item) => (
          <Thead>{item.node.data.Value}</Thead>
        ))}
      </Table>
      <ReactTable columns={columns} data={data2} />
    </Layout>
  );
};

export default Home;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexPage {
    Table: allAirtable {
      edges {
        node {
          id
          data {
            ValueKey
            Value
          }
          table
        }
      }
    }
  }
`;
