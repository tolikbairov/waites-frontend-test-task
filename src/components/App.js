import React, { Component } from "react";
// import { v4 as uuidv4 } from "uuid";
import Filter from "./filter/filter";
import "./App.css";
import botUsers from "../data/users.json";
import UserList from "./UserList/UserList";
import Pagination from "./Pagination/Pagination";

class App extends Component {
  state = {
    users: [],
    filter: "",
    currentPage: 1,
  };
  usersPerPage = 12;
  sexObj = ["male", "female"];
  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value, currentPage: 1 });
  };
  componentDidMount() {
    const users = botUsers;
    const normalizeUsers = users.map((user) => {
      user.sex = this.sexObj[user.sex];
      return user;
    });
    this.setState({ users: normalizeUsers });
  }
  getVisibleUsers = () => {
    const { filter, users } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return users.filter((user) =>
      user.name.toLowerCase().includes(normalizedFilter)
    );
  };
  paginate = (pageNumber) => {
    this.setState({ currentPage: pageNumber });
  };
  render() {
    const { filter } = this.state;
    const VisibleUsers = this.getVisibleUsers();
    const lastUserIndex = this.state.currentPage * this.usersPerPage;
    const firstUserIndex = lastUserIndex - this.usersPerPage;
    const currentUsers = VisibleUsers.slice(firstUserIndex, lastUserIndex);
    return (
      <>
        <div className="container">
          <h1>Bot users</h1>
          <Filter value={filter} onChange={this.changeFilter} />
          <UserList users={currentUsers} />
          <Pagination
            usersPerPage={this.usersPerPage}
            totalUsers={VisibleUsers.length}
            paginate={this.paginate}
          />
        </div>
      </>
    );
  }
}
export default App;
