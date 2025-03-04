import React, { useState } from "react";
import styled from "styled-components";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

// Sample Data (Replace with real data from your API)
const facilitiesData = [
  {
    id: 1,
    name: "Auditorium",
    photo: "/src/assets/Lvbuilding.jpg",
    capacity: 20,
    status: "Active",
  },
  {
    id: 2,
    name: "College Library",
    photo: "/src/assets/Lvbuilding.jpg",
    capacity: 50,
    status: "Inactive",
  },
  {
    id: 3,
    name: "Main Hall",
    photo: "/src/assets/Lvbuilding.jpg",
    capacity: 50,
    status: "Active",
  },
  {
    id: 4,
    name: "Room C",
    photo: "/src/assets/Lvbuilding.jpg",
    capacity: 15,
    status: "Inactive",
  },
  {
    id: 5,
    name: "Training Room",
    photo: "/src/assets/Lvbuilding.jpg",
    capacity: 25,
    status: "Active",
  },
  {
    id: 6,
    name: "Storage Room",
    photo: "/src/assets/Lvbuilding.jpg",
    capacity: 5,
    status: "Active",
  },
  {
    id: 7,
    name: "Kitchen",
    photo: "/src/assets/Lvbuilding.jpg",
    capacity: 10,
    status: "Inactive",
  },
  {
    id: 8,
    name: "Outdoor Space",
    photo: "/src/assets/Lvbuilding.jpg",
    capacity: 100,
    status: "Active",
  },
  {
    id: 9,
    name: "Lobby",
    photo: "/src/assets/Lvbuilding.jpg",
    capacity: 30,
    status: "Active",
  },
  {
    id: 10,
    name: "Board Room",
    photo: "/src/assets/Lvbuilding.jpg",
    capacity: 12,
    status: "Inactive",
  },
];

const PageSize = 5; // Items per page

// Pagination Component
const Pagination = ({ currentPage, totalPages, setPage }: any) => {
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setPage(page);
    }
  };

  return (
    <PaginationContainer>
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="page-button"
      >
        Previous
      </button>
      <span className="page-info">
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="page-button"
      >
        Next
      </button>
    </PaginationContainer>
  );
};

const FacilityManagement: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalFacilities = facilitiesData.length;
  const totalPages = Math.ceil(totalFacilities / PageSize);

  // Get current page's facilities
  const currentFacilities = facilitiesData.slice(
    (currentPage - 1) * PageSize,
    currentPage * PageSize
  );

  const handleEdit = (id: number) => {
    alert(`Edit facility with ID: ${id}`);
  };

  const handleDisable = (id: number) => {
    alert(`Disable facility with ID: ${id}`);
  };

  return (
    <Container>
      <Header>
        <h2>Facility Management</h2>
        <p>Manage your available facilities with ease.</p>
      </Header>
      <FacilityList>
        {currentFacilities.map((facility) => (
          <FacilityItem key={facility.id}>
            <FacilityPhoto src={facility.photo} alt={facility.name} />
            <FacilityDetails>
              <h3>{facility.name}</h3>
              <p>
                <strong>Capacity:</strong> {facility.capacity}
              </p>
              <p>
                <strong>Status:</strong>{" "}
                <Status status={facility.status}>{facility.status}</Status>
              </p>
            </FacilityDetails>
            <ActionButtons>
              <button onClick={() => handleEdit(facility.id)}>
                <FaEdit /> Edit
              </button>
              <button onClick={() => handleDisable(facility.id)}>
                <FaTrashAlt /> Disable
              </button>
            </ActionButtons>
          </FacilityItem>
        ))}
      </FacilityList>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setPage={setCurrentPage}
      />
    </Container>
  );
};

export default FacilityManagement;

const Container = styled.div`
  padding: 40px;
  font-family: "Roboto", sans-serif;
  background-color: #f4f6f9;
`;

const Header = styled.div`
  margin-bottom: 40px;
  text-align: center;

  h2 {
    font-size: 28px;
    color: #333;
  }

  p {
    font-size: 16px;
    color: #666;
  }
`;

const FacilityList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 0 20px;
`;

const FacilityItem = styled.div`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const FacilityPhoto = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 12px 12px 0 0;
`;

const FacilityDetails = styled.div`
  padding: 20px;

  h3 {
    font-size: 20px;
    color: #333;
    margin-bottom: 10px;
  }

  p {
    font-size: 14px;
    color: #666;
    margin-bottom: 10px;
  }
`;

const Status = styled.span<{ status: string }>`
  color: ${(props) => (props.status === "Active" ? "#27ae60" : "#e74c3c")};
  font-weight: bold;
`;

const ActionButtons = styled.div`
  padding: 15px;
  display: flex;
  justify-content: space-around;
  background-color: #f9fafb;
  border-top: 1px solid #f0f0f0;

  button {
    background-color: #3498db;
    color: white;
    border: none;
    padding: 8px 20px;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #2980b9;
    }

    svg {
      margin-right: 5px;
    }

    &:first-child {
      background-color: #f39c12;

      &:hover {
        background-color: #e67e22;
      }
    }

    &:last-child {
      background-color: #e74c3c;

      &:hover {
        background-color: #c0392b;
      }
    }
  }
`;

const PaginationContainer = styled.div`
  text-align: center;
  margin-top: 30px;

  .page-button {
    background-color: #3498db;
    color: white;
    border: none;
    padding: 8px 16px;
    margin: 0 5px;
    border-radius: 5px;
    cursor: pointer;

    &:disabled {
      background-color: #ccc;
      cursor: not-allowed;
    }

    &:hover {
      background-color: #2980b9;
    }
  }

  .page-info {
    font-size: 16px;
    color: #333;
    margin: 0 10px;
  }
`;
