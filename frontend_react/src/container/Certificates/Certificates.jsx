import React, { useState, useEffect } from "react";
import { AiFillEye } from "react-icons/ai";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Certificates.scss";

const Certificates = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [certificates, setCertificates] = useState([]);
  const [filterCertificate, setFilterCertificate] = useState([]);
  const [visibleCertificates, setVisibleCertificates] = useState(6); // Initial number of certificates to display
  const [loadMoreButton, setLoadMoreButton] = useState(true); // Control visibility of load more button

  useEffect(() => {
    const query = '*[_type == "certificates"]';

    client.fetch(query).then((data) => {
      setCertificates(data);
      setFilterCertificate(data);
    });
  }, []);

  useEffect(() => {
    if (activeFilter === "All") {
      setFilterCertificate(certificates.slice(0, visibleCertificates));
      // Check if there are more certificates to load
      setLoadMoreButton(visibleCertificates < certificates.length);
    } else {
      setFilterCertificate(certificates.filter((certificate) => certificate.tags && certificate.tags.includes(activeFilter)));
      setLoadMoreButton(false); // Disable load more for filtered categories
    }
  }, [certificates, activeFilter, visibleCertificates]);

  const handleLoadMore = () => {
    setVisibleCertificates((prevCount) => prevCount + 6); // Increase by 6 for each load
  };

  const handleCertificateFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterCertificate(certificates.slice(0, visibleCertificates));
        setLoadMoreButton(visibleCertificates < certificates.length);
      } else {
        setFilterCertificate(certificates.filter((certificate) => certificate.tags && certificate.tags.includes(item)));
        setLoadMoreButton(false); // Disable load more for filtered categories
      }
    }, 500);
  };

  return (
    <>
      <h2 className="head-text">
        Certificates <span>&</span> Badges
      </h2>

      <div className="app__certificate-filter">
        {["Internship", "Technical","Hacktoberfest", "GCCP", "Extra-Curricular", "Workshop", "All"].map(
          (item, index) => (
            <div
              key={index}
              onClick={() => handleCertificateFilter(item)}
              className={`app__certificate-filter-item app__flex p-text ${
                activeFilter === item ? "item-active" : ""
              }`}
            >
              {item}
            </div>
          )
        )}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__certificate-portfolio"
      >
        {filterCertificate.map((certificate, index) => (
          <div className="app__certificate-item app__flex" key={index}>
            <div className="app__certificate-img app__flex">
              <img src={urlFor(certificate.imgUrl)} alt={certificate.name} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0,
                }}
                className="app__certificate-hover app__flex"
              >
                <a href={certificate.certificateLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
              </motion.div>
            </div>
            <div className="app__certificate-content app__flex">
              <h4 className="bold-text">{certificate.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {certificate.description}
              </p>

              <div className="app__certificate-tag app__flex">
                {certificate.tags && certificate.tags.length > 0 ? (
                  <p className="p-text">{certificate.tags[0]}</p>
                ) : null}
              </div>
            </div>
          </div>
        ))}
      </motion.div>

      {loadMoreButton && (
        <div className="load-more-button app__flex">
          <button onClick={handleLoadMore} >Load More</button>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Certificates, "app__certificates"),
  "certificates",
  "app__primarybg"
);
