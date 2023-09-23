import React from "react";
import { CategoriesStyles } from "../styles/HorizontalScroll";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

function CategorySelector() {
  const categoria = [
    {
      label: "Início",
      link: "/",
    },
    {
      label: "Restaurantes",
      link: "/restaurantes",
    },
    {
      label: "Mercados",
      link: "/mercados",
    },
    {
      label: "Farmácias",
      link: "/farmacias",
    },
    {
      label: "Pets",
      link: "/link",
    },
    {
      label: "Shopping",
      link: "/shopping",
    },
  ];

  return (
    <CategoriesStyles>
      {categoria.map((link) => (
        <li key={link.link}>
          <NavLink
            to={link.link}
            className={({ isActive }) =>
              isActive ? "active active-tab-indicator" : "inactive"
            }
          >
            {link.label}
            <motion.div layoutId="scroll-bar" />
          </NavLink>
        </li>
      ))}
    </CategoriesStyles>
  );
}

export default CategorySelector;
