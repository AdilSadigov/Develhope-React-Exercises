import React from "react";
import { ClickCounter } from "./ClickCounter";
import { ClickTracker } from "./ClickTracker";
import { Counter } from "./Counter";
import { FilteredList } from "./FilteredList";
import { GithubUser } from "./GithubUser";
import { GithubUserList } from "./GithubUserList";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { Login } from "./Login";
import { Welcome } from "./Welcome";

const users = [
   {id: 1, name: 'Person1', age: 22},
   {id: 2, name: 'Person2', age: 28},
   {id: 3, name: 'Person3', age: 16},
   {id: 4, name: 'Person4', age: 14},
   {id: 5, name: 'Person5', age: 40},
   {id: 6, name: 'Person6', age: 17},
   {id: 7, name: 'Person7', age: 20},
];

export function App() {
    return <FilteredList list={users}/>
}
