import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = ({ paths }) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        {paths.map((path, index) => (
          <li className={`breadcrumb-item ${index === paths.length - 1 ? 'active' : ''}`} key={index}>
            {index !== paths.length - 1 ? (
              <Link to={path.link}>{path.label}</Link>
            ) : (
              path.label
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
