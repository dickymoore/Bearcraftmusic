.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: black;
}

.logo {
  color: white;
  text-decoration: none;
  font-size: 1.5em;
  display: flex;
  align-items: center;
}

.logo-image {
  height: auto;
  max-height: 50px;
}

.menu {
  list-style: none;
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
}

.menu a {
  color: white;
  text-decoration: none;
  font-size: 20px;
  margin-left: 10px; /* Reduced margin-left from 20px to 10px */
}

.black-bg {
  background-color: black;
}

.white-bg {
  background-color: white;
}

.header a {
  color: #fff;
  text-decoration: none;
  padding: 3px 5px;
}

.header a:hover {
  background-color: #555;
  border-radius: 5px;
}

.header .social-icons {
  display: flex;
  align-items: center;
  gap: 3px;
  padding: 5px;
  height: 100%;
}

.header .social-icons a {
  color: white; /* Icon color white */
  font-size: 1.2em;
  display: flex;
  align-items: center;
  justify-content: center;
}

.header .social-icons a:hover {
  color: #7d7d7d; /* Grey hover color */
}
