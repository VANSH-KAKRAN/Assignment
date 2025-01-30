import React, { useState } from "react";
import {
  Container,
  Form,
  Button,
  ListGroup,
  Card,
  Collapse,
  Spinner,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {
  FaCheckCircle,
  FaHourglass,
  FaExclamationTriangle,
} from "react-icons/fa";
import "./SetupOrganisation.css";
import back from "../Images/back.png";

const SetupOrganisation = () => {
  const [companyName, setCompanyName] = useState("");
  const [websiteURL, setWebsiteURL] = useState("");
  const [description, setDescription] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [expandedPage, setExpandedPage] = useState(null); // For expanding page details
  const [pages, setPages] = useState([]); // Fix typo: setpages -> setPages

  const navigate = useNavigate();

  const handleFetchMetaDescription = async () => {
    setLoading(true);
    // Simulate fetching the meta description
    setTimeout(() => {
      // Set dummy data with proper 'status' field and ensure it's always a valid string
      setPages([
        {
          name: "Unknown 1",
          status: "Scraped", // Ensure this is a string value
          dataChunks: [
            "Welcome text",
            " ipsum dolor sit amet consectetur adipisicing elit. Placeat, ducimus repellat voluptate pariatur alias sunt eum earum perferendis molestiae maiores nisi. Nihil, ullam nam. Et aspernatur asperiores quae provident. Ab, vitae eveniet veritatis corporis ipsum quibusdam dolore cumque voluptatum eum, magni delectus, alias temporibus nostrum similique? Magnam sit unde, quia ipsam esse optio eum numquam cum praesentium! Atque, voluptatum nesciunt eveniet veritatis ipsa numquam saepe earum eligendi quas exercitationem iste quae enim consequuntur quaerat libero quo ad quis ratione quia, ipsum illo, vel consequatur! Odit, magni vitae soluta voluptatem expedita aut autem consectetur quos quasi, inventore dolorum pariatur eligendi. Pariatur labore consequuntur et quaerat. Labore exercitationem animi eveniet adipisci nam hic dolore laboriosam suscipit facere quam explicabo, ex natus repellat, eos quia molestias laudantium doloremque nisi esse? Consequuntur nesciunt eius impedit doloremque qui reiciendis deleniti aut nihil aliquam neque fuga, vitae ad, est accusamus tempora laudantium doloribus. Dolor facilis, dignissimos tenetur ex quia adipisci et deserunt delectus? Totam reprehenderit possimus excepturi voluptatem, id a provident enim voluptatum quibusdam, qui hic? Voluptatibus, voluptas dolor! Minima, et praesentium saepe aspernatur neque, aperiam, corrupti quaerat quia quam magnam iste! Necessitatibus voluptatem rem tempore ipsam pariatur qui! Voluptatem nam vel perferendis aspernatur libero quas.",
          ],
        },
        {
          name: "Unknown 2",
          status: "Scraped", // Ensure this is a string value
          dataChunks: [
            "Address",
            " ipsum dolor sit amet consectetur adipisicing elit. Placeat, ducimus repellat voluptate pariatur alias sunt eum earum perferendis molestiae maiores nisi. Nihil, ullam nam. Et aspernatur asperiores quae provident. Ab, vitae eveniet veritatis corporis ipsum quibusdam dolore cumque voluptatum eum, magni delectus, alias temporibus nostrum similique? Magnam sit unde, quia ipsam esse optio eum numquam cum praesentium! Atque, voluptatum nesciunt eveniet veritatis ipsa numquam saepe earum eligendi quas exercitationem iste quae enim consequuntur quaerat libero quo ad quis ratione quia, ipsum illo, vel consequatur! Odit, magni vitae soluta voluptatem expedita aut autem consectetur quos quasi, inventore dolorum pariatur eligendi. Pariatur labore consequuntur et quaerat. Labore exercitationem animi eveniet adipisci nam hic dolore laboriosam suscipit facere quam explicabo, ex natus repellat, eos quia molestias laudantium doloremque nisi esse? Consequuntur nesciunt eius impedit doloremque qui reiciendis deleniti aut nihil aliquam neque fuga, vitae ad, est accusamus tempora laudantium doloribus. Dolor facilis, dignissimos tenetur ex quia adipisci et deserunt delectus? Totam reprehenderit possimus excepturi voluptatem, id a provident enim voluptatum quibusdam, qui hic? Voluptatibus, voluptas dolor! Minima, et praesentium saepe aspernatur neque, aperiam, corrupti quaerat quia quam magnam iste! Necessitatibus voluptatem rem tempore ipsam pariatur qui! Voluptatem nam vel perferendis aspernatur libero quas ipsum dolor sit amet consectetur adipisicing elit. Placeat, ducimus repellat voluptate pariatur alias sunt eum earum perferendis molestiae maiores nisi. Nihil, ullam nam. Et aspernatur asperiores quae provident. Ab, vitae eveniet veritatis corporis ipsum quibusdam dolore cumque voluptatum eum, magni delectus, alias temporibus nostrum similique? Magnam sit unde, quia ipsam esse optio eum numquam cum praesentium! Atque, voluptatum nesciunt eveniet veritatis ipsa numquam saepe earum eligendi quas exercitationem iste quae enim consequuntur quaerat libero quo ad quis ratione quia, ipsum illo, vel consequatur! Odit, magni vitae soluta voluptatem expedita aut autem consectetur quos quasi, inventore dolorum pariatur eligendi. Pariatur labore consequuntur et quaerat. Labore exercitationem animi eveniet adipisci nam hic dolore laboriosam suscipit facere quam explicabo, ex natus repellat, eos quia molestias laudantium doloremque nisi esse? Consequuntur nesciunt eius impedit doloremque qui reiciendis deleniti aut nihil aliquam neque fuga, vitae ad, est accusamus tempora laudantium doloribus. Dolor facilis, dignissimos tenetur ex quia adipisci et deserunt delectus? Totam reprehenderit possimus excepturi voluptatem, id a provident enim voluptatum quibusdam, qui hic? Voluptatibus, voluptas dolor! Minima, et praesentium saepe aspernatur neque, aperiam, corrupti quaerat quia quam magnam iste! Necessitatibus voluptatem rem tempore ipsam pariatur qui! Voluptatem nam vel perferendis aspernatur libero quas.",
          ],
        },
        {
          name: "Unknown 3",
          status: "Pending", // Ensure this is a string value
          dataChunks: [],
        },
      ]);
      setMetaDescription(
        "This is a sample meta description fetched from the website URL."
      );
      setLoading(false);
    }, 2000);
  };

  const handleSubmit = (event) => {
    event.stopPropagation();
    navigate("/bot");
  };

  const handlePageClick = (index) => {
    setExpandedPage(expandedPage === index ? null : index); // Toggle the collapse for expanded page
  };

  const renderPageStatus = (status) => {
    if (!status || typeof status !== "string") {
      // If the status is invalid or undefined, return a default icon
      return <FaExclamationTriangle color="red" />;
    }

    // Now status is guaranteed to be a valid string
    switch (status.toLowerCase()) {
      case "scraped":
        return <FaCheckCircle color="green" />;
      case "pending":
        return <FaHourglass color="orange" />;
      default:
        return <FaExclamationTriangle color="red" />;
    }
  };

  return (
    <div
      style={{ backgroundImage: `url(${back})`, backgroundSize: "cover" }}
      className="containerr"
    >
      <div className="setup-box">
        <h2 className="heading">Setup Your Organisation</h2>
        <h5>Free Tool for (AI-Powered) Works</h5>
        <p>
          BeyondChats is an innovative chatbot technology company that
          specializes in helping businesses enhance their customer experience
          through intelligent and easy-to-deploy chatbot solutions.
        </p>

        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="companyName">
            <Form.Control
              type="text"
              placeholder="Enter company name"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className="input-field"
            />
          </Form.Group>

          <Form.Group controlId="websiteURL">
            <div className="url-input-group">
              <Form.Control
                type="url"
                placeholder="Enter your website URL"
                value={websiteURL}
                onChange={(e) => setWebsiteURL(e.target.value)}
                className="input-field"
              />
            </div>
          </Form.Group>

          <Form.Group controlId="description">
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter your company description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="input-field"
            />
          </Form.Group>

          {/* <Button variant="primary" type="submit" className="submit-btn">
            Submit
          </Button> */}
          <Button
            variant="outline-primary"
            className="fetch-btn"
            onClick={handleFetchMetaDescription}
            disabled={loading}
          >
            {loading ? (
              <Spinner animation="border" size="sm" />
            ) : (
              "Fetch Meta Description"
            )}
          </Button>
        </Form>

        <div className="page-list">
          {metaDescription && (
            <div className="meta-description">
              <strong>Meta Description:</strong> {metaDescription}
            </div>
          )}
          {pages.map((page, index) => (
            <Card
              onClick={handleSubmit}
              key={index}
              className={`page-card ${
                page.status ? page.status.toLowerCase() : "default"
              }`}
            >
              <Card.Body>
                <div className="d-flex justify-content-between">
                  <div className="page-title">
                    <h5>{page.name}</h5>
                    {renderPageStatus(page.status)} {page.status}
                  </div>
                  {/* <Button
                    variant="link"
                    onClick={() => handlePageClick(index)}
                    className="text-info"
                  >
                    View Details
                  </Button> */}
                  <Button
                    variant="link"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevents event bubbling
                      handlePageClick(index);
                    }}
                    className="text-info"
                  >
                    View Details
                  </Button>
                </div>
                <Collapse in={expandedPage === index}>
                  <div className="data-chunks">
                    <h6>Data Chunks:</h6>
                    <ListGroup>
                      {page.dataChunks.length > 0 ? (
                        page.dataChunks.map((chunk, i) => (
                          <ListGroup.Item key={i}>{chunk}</ListGroup.Item>
                        ))
                      ) : (
                        <ListGroup.Item>No data available.</ListGroup.Item>
                      )}
                    </ListGroup>
                  </div>
                </Collapse>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SetupOrganisation;
