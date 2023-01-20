import "./navbar.css";
import React from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import "font-awesome/css/font-awesome.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "react-dropdown/style.css";

import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";

library.add(faCheckSquare, faCoffee);
// setTimeout(timeout, 1000);

// function timeout() {
//   // dorpdown options mouseover function

//   function mouseoverNavigation(ele) {
//     let nav1 = document.querySelector(`#${ele}>div`);
//     nav1.style.display = "block";
//     document.querySelector(`#${ele}>a`).style.backgroundColor = "white";
//     document.querySelector(`#${ele}>a`).style.color = "#24a3b5";
//   }

//   document
//     .getElementById("nav1")
//     .onClick("mouseover", mouseoverNavigation.bind(null, "nav1"));
//   document
//     .getElementById("nav2")
//     .addEventListener("mouseover", mouseoverNavigation.bind(null, "nav2"));
//   document
//     .getElementById("nav3")
//     .addEventListener("mouseover", mouseoverNavigation.bind(null, "nav3"));
//   document
//     .getElementById("nav4")
//     .addEventListener("mouseover", mouseoverNavigation.bind(null, "nav4"));
//   document
//     .getElementById("nav5")
//     .addEventListener("mouseover", mouseoverNavigation.bind(null, "nav5"));
//   document
//     .getElementById("nav6")
//     .addEventListener("mouseover", mouseoverNavigation.bind(null, "nav6"));
//   document
//     .getElementById("nav7")
//     .addEventListener("mouseover", mouseoverNavigation.bind(null, "nav7"));
//   document
//     .getElementById("nav8")
//     .addEventListener("mouseover", mouseoverNavigation.bind(null, "nav8"));
//   function mouseoutNavigation(ele) {
//     let nav1 = document.querySelector(`#${ele}>div`);
//     nav1.style.display = "none";
//     document.querySelector(`#${ele}>a`).style.backgroundColor = "#24a3b5";
//     document.querySelector(`#${ele}>a`).style.color = "white";
//   }
//   document
//     .getElementById("nav1")
//     .addEventListener("mouseout", mouseoutNavigation.bind(null, "nav1"));
//   document
//     .getElementById("nav2")
//     .addEventListener("mouseout", mouseoutNavigation.bind(null, "nav2"));
//   document
//     .getElementById("nav3")
//     .addEventListener("mouseout", mouseoutNavigation.bind(null, "nav3"));
//   document
//     .getElementById("nav4")
//     .addEventListener("mouseout", mouseoutNavigation.bind(null, "nav4"));
//   document
//     .getElementById("nav5")
//     .addEventListener("mouseout", mouseoutNavigation.bind(null, "nav5"));
//   document
//     .getElementById("nav6")
//     .addEventListener("mouseout", mouseoutNavigation.bind(null, "nav6"));
//   document
//     .getElementById("nav7")
//     .addEventListener("mouseout", mouseoutNavigation.bind(null, "nav7"));
//   document
//     .getElementById("nav8")
//     .addEventListener("mouseout", mouseoutNavigation.bind(null, "nav8"));


// }

function Navbar() {
  return (
    <div className="navbar">
      <div className="header">
        <div id="sellList">
          <ul>
            <li>Sell With Us</li>
            <li>Call Us</li>
            <li>Download App</li>
            <li></li>
          </ul>
        </div>
        <div id="logo">
          <a href="/about-us">
       <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMzIiBoZWlnaHQ9IjQ0IiB2aWV3Qm94PSIwIDAgMTMzIDQ0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogICAgPHBhdGggZD0iTTQyLjQ4IDMxLjAwM2gyLjAwM3Y1LjYyNWguMDVjLjEtLjEzNC4yMjgtLjI2Ny4zODMtLjRhMi44NCAyLjg0IDAgMCAxIC41NjgtLjQwMSAzLjQ1IDMuNDUgMCAwIDEgLjc2OC0uM2MuMjg5LS4wNzkuNjIzLS4xMTggMS4wMDEtLjExOC41NjcgMCAxLjA5LjExMiAxLjU2OS4zMzQuNDc4LjIxMi44ODQuNTA2IDEuMjE4Ljg4NS4zNDUuMzc4LjYxMi44MjMuODAxIDEuMzM1YTQuNzMgNC43MyAwIDAgMSAuMjg0IDEuNjUyYzAgLjU5LS4wODkgMS4xNC0uMjY3IDEuNjUyLS4xNzguNTEyLS40NC45NTctLjc4NCAxLjMzNmEzLjggMy44IDAgMCAxLTEuMjUyLjljLS40OS4yMTItMS4wNC4zMTgtMS42NTMuMzE4YTMuNzg3IDMuNzg3IDAgMCAxLTEuNTg1LS4zMzQgMi41NzYgMi41NzYgMCAwIDEtMS4xNjgtMS4wNjhoLS4wMzR2MS4yMDJINDIuNDhWMzEuMDAzem02LjY0MiA4LjYxMmMwLS4zMTEtLjA1NS0uNjEyLS4xNjctLjkwMWEyLjEgMi4xIDAgMCAwLS40NjctLjc2OGMtLjItLjIyMi0uNDQ1LS40LS43MzQtLjUzNC0uMjktLjEzMy0uNjE4LS4yLS45ODUtLjJhMi4zMjMgMi4zMjMgMCAwIDAtMS43MzYuNzM0Yy0uMi4yMjMtLjM1Ni40NzktLjQ2Ny43NjgtLjEuMjktLjE1LjU5LS4xNS45MDEgMCAuMzEyLjA1LjYxMi4xNS45MDEuMTExLjI5LjI2Ny41NDYuNDY3Ljc2OGEyLjMyNCAyLjMyNCAwIDAgMCAxLjczNi43MzRjLjM2NyAwIC42OTUtLjA2Ni45ODUtLjIuMjg5LS4xMzMuNTM0LS4zMTEuNzM0LS41MzRhMi4xIDIuMSAwIDAgMCAuNDY3LS43NjhjLjExMi0uMjg5LjE2Ny0uNTkuMTY3LS45ek01OC4zMzMgNDIuNTJoLS4wNWMtLjI5LjQ1NS0uNjU3Ljc5LTEuMTAyIDEtLjQ0NS4yLS45MzQuMzAxLTEuNDY4LjMwMWEzLjk5IDMuOTkgMCAwIDEtMS4wODUtLjE1Yy0uMzQ1LS4xLS42NTctLjI1LS45MzUtLjQ1LS4yNjctLjIwMS0uNDg0LS40NTEtLjY1LS43NTJhMi4xMyAyLjEzIDAgMCAxLS4yNTEtMS4wNTFjMC0uNDM0LjA3OC0uODAxLjIzNC0xLjEwMi4xNTUtLjMxMS4zNjEtLjU2Ny42MTctLjc2OC4yNjctLjIxMS41NzMtLjM3OC45MTgtLjVhNS43NyA1Ljc3IDAgMCAxIDEuMDY4LS4yNjcgNy44NDEgNy44NDEgMCAwIDEgMS4xMzUtLjExN2MuMzc4LS4wMjIuNzM0LS4wMzQgMS4wNjgtLjAzNGguNTAxdi0uMjE3YzAtLjUtLjE3Mi0uODczLS41MTctMS4xMTgtLjM0NS0uMjU2LS43ODUtLjM4NC0xLjMxOS0uMzg0LS40MjMgMC0uODE4LjA3OC0xLjE4NS4yMzRhMi44ODggMi44ODggMCAwIDAtLjk1MS42bC0xLjA1Mi0xLjA1YTMuODkgMy44OSAwIDAgMSAxLjU1My0uOTg1Yy42LS4yIDEuMjE4LS4zIDEuODUyLS4zLjU2OCAwIDEuMDQ2LjA2NiAxLjQzNS4yLjM5LjEyMi43MTIuMjgzLjk2OC40ODQuMjU2LjIuNDUxLjQzNC41ODUuNy4xNDQuMjU3LjI0NC41MTguMy43ODUuMDY3LjI2Ny4xMDYuNTI5LjExNy43ODUuMDEuMjQ0LjAxNi40NjEuMDE2LjY1djQuNjA3aC0xLjgwMnYtMS4xMDJ6bS0uMTE3LTIuNDg4SDU3LjhjLS4yNzggMC0uNTkuMDEyLS45MzUuMDM0YTQuNjcyIDQuNjcyIDAgMCAwLS45ODQuMTY3Yy0uMy4wNzgtLjU1Ny4yLS43NjguMzY3LS4yMTIuMTU2LS4zMTcuMzc4LS4zMTcuNjY3IDAgLjE5LjAzOS4zNS4xMTcuNDg0LjA4OS4xMjMuMi4yMjkuMzMzLjMxOC4xMzQuMDg5LjI4NC4xNTUuNDUxLjIuMTY3LjAzMy4zMzQuMDUuNS4wNS42OSAwIDEuMTk3LS4xNjEgMS41Mi0uNDg0LjMzMy0uMzM0LjUtLjc4NS41LTEuMzUydi0uNDV6TTYyLjA1NyA0MS43NjhsNC4yODktNC41MjN2LS4wMzNoLTQuMDlWMzUuNjFoNi41MXYxLjgxOWwtNC4zNCA0LjU5aDQuNTR2MS42MDJoLTYuOTF2LTEuODUzek03Ni4wMTYgNDIuNTJoLS4wNWMtLjI5LjQ1NS0uNjU2Ljc5LTEuMTAxIDEtLjQ0NS4yLS45MzUuMzAxLTEuNDcuMzAxYTMuOTkgMy45OSAwIDAgMS0xLjA4NC0uMTVjLS4zNDUtLjEtLjY1Ni0uMjUtLjkzNS0uNDUtLjI2Ny0uMjAxLS40ODQtLjQ1MS0uNjUtLjc1MmEyLjEzIDIuMTMgMCAwIDEtLjI1LTEuMDUxYzAtLjQzNC4wNzctLjgwMS4yMzMtMS4xMDIuMTU2LS4zMTEuMzYxLS41NjcuNjE3LS43NjguMjY3LS4yMTEuNTczLS4zNzguOTE4LS41YTUuNzcgNS43NyAwIDAgMSAxLjA2OC0uMjY3IDcuODQxIDcuODQxIDAgMCAxIDEuMTM1LS4xMTdjLjM3OS0uMDIyLjczNS0uMDM0IDEuMDY5LS4wMzRoLjV2LS4yMTdjMC0uNS0uMTcyLS44NzMtLjUxNy0xLjExOC0uMzQ1LS4yNTYtLjc4NS0uMzg0LTEuMzE5LS4zODQtLjQyMyAwLS44MTguMDc4LTEuMTg1LjIzNGEyLjg5IDIuODkgMCAwIDAtLjk1MS42bC0xLjA1MS0xLjA1YTMuODkgMy44OSAwIDAgMSAxLjU1Mi0uOTg1Yy42LS4yIDEuMjE4LS4zIDEuODUyLS4zLjU2OCAwIDEuMDQ2LjA2NiAxLjQzNi4yLjM4OS4xMjIuNzEyLjI4My45NjguNDg0LjI1NS4yLjQ1LjQzNC41ODQuNy4xNDQuMjU3LjI0NC41MTguMy43ODUuMDY3LjI2Ny4xMDYuNTI5LjExNy43ODUuMDExLjI0NC4wMTcuNDYxLjAxNy42NXY0LjYwN2gtMS44MDN2LTEuMTAyem0tLjExNy0yLjQ4OGgtLjQxN2MtLjI3OCAwLS41OS4wMTItLjkzNC4wMzRhNC42NzMgNC42NzMgMCAwIDAtLjk4NS4xNjdjLS4zLjA3OC0uNTU2LjItLjc2OC4zNjctLjIxMS4xNTYtLjMxNy4zNzgtLjMxNy42NjcgMCAuMTkuMDM5LjM1LjExNy40ODQuMDg5LjEyMy4yLjIyOS4zMzQuMzE4LjEzMy4wODkuMjgzLjE1NS40NS4yLjE2Ny4wMzMuMzM0LjA1LjUuMDUuNjkgMCAxLjE5Ny0uMTYxIDEuNTItLjQ4NC4zMzMtLjMzNC41LS43ODUuNS0xLjM1MnYtLjQ1ek04NS4zMTQgNDIuNTJoLS4wNWMtLjI5LjQ1NS0uNjU2Ljc5LTEuMTAyIDEtLjQ0NS4yLS45MzQuMzAxLTEuNDY4LjMwMWEzLjk5IDMuOTkgMCAwIDEtMS4wODUtLjE1Yy0uMzQ1LS4xLS42NTYtLjI1LS45MzUtLjQ1LS4yNjctLjIwMS0uNDg0LS40NTEtLjY1LS43NTJhMi4xMyAyLjEzIDAgMCAxLS4yNS0xLjA1MWMwLS40MzQuMDc3LS44MDEuMjMzLTEuMTAyLjE1Ni0uMzExLjM2MS0uNTY3LjYxNy0uNzY4LjI2Ny0uMjExLjU3My0uMzc4LjkxOC0uNS4zNDUtLjEyMy43MDEtLjIxMiAxLjA2OC0uMjY3YTcuODQxIDcuODQxIDAgMCAxIDEuMTM1LS4xMTcgMTguMiAxOC4yIDAgMCAxIDEuMDY4LS4wMzRoLjUwMXYtLjIxN2MwLS41LS4xNzItLjg3My0uNTE3LTEuMTE4LS4zNDUtLjI1Ni0uNzg1LS4zODQtMS4zMTktLjM4NC0uNDIyIDAtLjgxNy4wNzgtMS4xODUuMjM0YTIuODg3IDIuODg3IDAgMCAwLS45NTEuNmwtMS4wNTItMS4wNWEzLjg5MiAzLjg5MiAwIDAgMSAxLjU1My0uOTg1Yy42LS4yIDEuMjE4LS4zIDEuODUyLS4zLjU2OCAwIDEuMDQ2LjA2NiAxLjQzNi4yLjM4OS4xMjIuNzEyLjI4My45NjguNDg0LjI1NS4yLjQ1LjQzNC41ODQuNy4xNDQuMjU3LjI0NC41MTguMy43ODUuMDY3LjI2Ny4xMDYuNTI5LjExNy43ODUuMDExLjI0NC4wMTcuNDYxLjAxNy42NXY0LjYwN2gtMS44MDN2LTEuMTAyem0tLjExNy0yLjQ4OGgtLjQxN2MtLjI3OCAwLS41OS4wMTItLjkzNS4wMzRhNC42NzQgNC42NzQgMCAwIDAtLjk4NC4xNjdjLS4zLjA3OC0uNTU3LjItLjc2OC4zNjctLjIxMS4xNTYtLjMxNy4zNzgtLjMxNy42NjcgMCAuMTkuMDM5LjM1LjExNy40ODQuMDg5LjEyMy4yLjIyOS4zMzQuMzE4LjEzMy4wODkuMjgzLjE1NS40NS4yLjE2Ny4wMzMuMzM0LjA1LjUuMDUuNjkgMCAxLjE5Ny0uMTYxIDEuNTItLjQ4NC4zMzMtLjMzNC41LS43ODUuNS0xLjM1MnYtLjQ1ek04OS42MDUgMzUuNjFoMi4wMDN2MS4yNjhoLjAzM2MuMjIzLS40NjcuNTQtLjgyOS45NTItMS4wODVhMi42MyAyLjYzIDAgMCAxIDEuNDE4LS4zODRjLjEyMyAwIC4yNC4wMTEuMzUuMDM0LjEyMy4wMjIuMjQ1LjA1LjM2OC4wODN2MS45MzZhMy45NzggMy45NzggMCAwIDAtLjUtLjEgMi4yMjIgMi4yMjIgMCAwIDAtLjQ2OC0uMDVjLS40NjcgMC0uODQ2LjA4OS0xLjEzNS4yNjdhMi4wOSAyLjA5IDAgMCAwLS42NS41ODQgMi4yMTIgMi4yMTIgMCAwIDAtLjMwMS42NjhjLS4wNDUuMjIyLS4wNjcuMzktLjA2Ny41djQuMjloLTIuMDAzVjM1LjYxek0xLjY4OCAxMC45NjJjMC0uODM4LjY3OS0xLjUxNyAxLjUxNy0xLjUxN2gyOC4zNDljLjgzOCAwIDEuNTE3LjY3OSAxLjUxNyAxLjUxN3Y1LjYzN0gxLjY4OHYtNS42Mzd6IiBmaWxsPSIjMDA4MTkzIi8+CiAgICA8cGF0aCBvcGFjaXR5PSIuNCIgZD0iTTI3LjQxIDE3LjA3MWMwLTQuMzM2LTEuMDktOC40OTUtMy4wMjgtMTEuNTYxLTEuOTQtMy4wNjYtNC41NjktNC41NDgtNy4zMS00LjU0OC0yLjc0MyAwLTUuMzczIDEuNDgyLTcuMzExIDQuNTQ4LTEuOTQgMy4wNjYtMy4wMjkgNy4yMjUtMy4wMjkgMTEuNTYxaDIuMTMzYzAtMy40NDIuODY0LTYuNzQzIDIuNDAzLTkuMTc3IDEuNTQtMi40MzMgMy42MjctNC4yODcgNS44MDMtNC4yODcgMi4xNzcgMCA0LjI2NCAxLjg1NCA1LjgwMyA0LjI4NyAxLjUzOSAyLjQzNCAyLjQwNCA1LjczNSAyLjQwNCA5LjE3N2gyLjEzMnoiIGZpbGw9IiMwMDAiLz4KICAgIDxwYXRoIGQ9Ik0yNy40MSAxNy4wNzFjMC00LjcxOS0xLjA5LTkuMjQ0LTMuMDI4LTEyLjU4MUMyMi40NDIgMS4xNTMgMTkuODEzIDAgMTcuMDcyIDBjLTIuNzQzIDAtNS4zNzMgMS4xNTMtNy4zMTEgNC40OS0xLjk0IDMuMzM3LTMuMDI5IDcuODYyLTMuMDI5IDEyLjU4MWgyLjA1OWMwLTMuNzguODcyLTcuNDA0IDIuNDI1LTEwLjA3NiAxLjU1My0yLjY3MiAzLjY2LTQuNTkgNS44NTUtNC41OSAyLjE5NiAwIDQuMzAyIDEuOTE4IDUuODU1IDQuNTkgMS41NTMgMi42NzIgMi40MjUgNi4yOTcgMi40MjUgMTAuMDc2aDIuMDU5eiIgZmlsbD0iI2ZmZiIvPgogICAgPHBhdGggZD0iTTAgMTUuOTI0aDM0LjU1NnYyMy41MjRBNC41NTIgNC41NTIgMCAwIDEgMzAuMDA0IDQ0SDQuNTUyQTQuNTUyIDQuNTUyIDAgMCAxIDAgMzkuNDQ4VjE1LjkyNHoiIGZpbGw9InVybCgjcnJsdGUwbmduYSkiLz4KICAgIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjcuODI2IDIyLjAzYy0uMTE1LjIyNC02Ljc4IDkuOTIxLTEwLjYzIDE0LjQzNC0uOTEyIDEuMDY3LTIuNDQxIDEuMDk1LTMuMzUxLS4wNTUtMi4xMDYtMi42NTktMy44MDctNC45NjctNS43ODItOC4xNzQtLjI3My0uNDQtLjYwOS0xLjA3NS0uMTItMS42MzEgMCAwIC41MzgtLjYyIDEuNzAzLjIzMiAxLjQ4MSAxLjA4IDMuMDU3IDIuMTM0IDQuNTExIDMuMTM2LjgzMi41NzIgMS4zNjMuNjIyIDIuMTMuMDA4IDMuMjMtMi41ODIgMTAuNDcxLTguMTUyIDEwLjg4My04LjQxMS43MjctLjQ1Ny44MTkuMTE0LjY0Ni40NmguMDF6IiBmaWxsPSIjZmZmIi8+CiAgICA8cGF0aCBkPSJNNC44NiAxMS42NzIgMCAxNS45MjRoNC44NnYtNC4yNTJ6TTM0LjUyMiAxNS45MjRsLTQuODkzLTQuMzF2NC4zMWg0Ljg5M3oiIGZpbGw9IiMwMzhCOUEiLz4KICAgIDxwYXRoIGQ9Ik0xLjY1NCAxNC41MDZ2LTMuNTY4YS43NTkuNzU5IDAgMCAxIDEuMTgyLS42M2wyLjAyNCAxLjM2NC0zLjIwNiAyLjgzNHpNMzMuMDcgMTAuODcydjMuNzdsLTMuNDQxLTMuMDA0IDIuMjg0LTEuNDExYS43NTkuNzU5IDAgMCAxIDEuMTU4LjY0NXoiIGZpbGw9IiMwNEE1QjciLz4KICAgIDxwYXRoIG9wYWNpdHk9Ii4zIiBkPSJNMTMuNDY0IDEyLjk4NGExLjIwMiAxLjIwMiAwIDEgMS0yLjQwNCAwIDEuMjAyIDEuMjAyIDAgMCAxIDIuNDA0IDB6TTIzLjA4MiAxMi45ODRhMS4yMDIgMS4yMDIgMCAxIDEtMi40MDQgMCAxLjIwMiAxLjIwMiAwIDAgMSAyLjQwNCAweiIgZmlsbD0iIzAwMCIvPgogICAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00NS42MjQgMTQuMTIzYzAtMS4wODUgMC0yLjAyNSAxLjAyOC0yLjAyNSAxLjAyNyAwIDEuMDI3IDEuMjAzIDEuMDI3IDIuMDgzIDAgLjQ0LjE0Ni41ODcuNTg2LjU4N2gyLjMxOGMuNDQgMCAuNTg2LS4yOTMuNTg2LS43MzIgMC0zLjE3LTEuNTI0LTUuMjgyLTQuNjY0LTUuMjgyLTIuOTM1IDAtNC40MDIgMS45NjYtNC40MDIgNC42MDYgMCAyLjMxOS4yOTUgMy40MDQgMy4xMTIgNi43MTkgMS41NTQgMS44MiAyLjQzNCAzLjAyMyAyLjQzNCA0LjEzOCAwIDEuMDg1IDAgMi4wMjQtMS4wMjcgMi4wMjRzLTEuMDI3LTEuMjAzLTEuMDI3LTIuMDg0YzAtLjQ0LS4xNDctLjU4Ny0uNTg2LS41ODdINDIuNjljLS40NCAwLS41ODcuMjk0LS41ODcuNzM0IDAgMy4xNyAxLjUyNiA1LjI4MiA0LjY2NiA1LjI4MiAyLjkzNCAwIDQuNC0xLjk2NiA0LjQtNC42MDcgMC0yLjMxOC0uMjY0LTMuNDA0LTMuMDgtNi43Mi0xLjU1NC0xLjgxOC0yLjQ2NS0zLjAyLTIuNDY1LTQuMTM2ek01OC42NTEgMjkuNDRoMi4zNDhjLjI5MyAwIC41ODcgMCAuNTg3LS41ODdWOS40ODdjMC0uNDQtLjE0Ny0uNTg3LS41ODctLjU4N0g1OC42NWMtLjQ0IDAtLjU4Ni4xNDctLjU4Ni41ODd2Ni44NjZjMCAuNTg3IDAgLjU4Ny0uNTg3LjU4N2gtLjg4Yy0uNTg3IDAtLjU4NyAwLS41ODctLjU4N1Y5LjQ4N2MwLS40NC0uMTQ3LS41ODctLjU4Ny0uNTg3aC0yLjM0OGMtLjQzOSAwLS41ODcuMTQ3LS41ODcuNTg3djE5LjM2NWMwIC41ODcuMjk1LjU4Ny41ODcuNTg3aDIuMzQ4Yy4yOTQgMCAuNTg3IDAgLjU4Ny0uNTg3di03Ljk4YzAtLjU4NyAwLS41ODcuNTg3LS41ODdoLjg4Yy41ODcgMCAuNTg3IDAgLjU4Ny41ODd2Ny45OGMwIC41ODcuMjkzLjU4Ny41ODYuNTg3em0xMy43OS01LjcyMnYtOS4wOTVjMC00LjQwMi0xLjYxMy01Ljg2OC00LjU0OC01Ljg2OC0yLjkzNCAwLTQuNTQ3IDEuNDM3LTQuNTQ3IDUuODY4djkuMDk1YzAgNC40MzEgMS42MTMgNS44NyA0LjU0NyA1Ljg3IDIuOTM1IDAgNC41NDgtMS40NyA0LjU0OC01Ljg3em0tMy41MjEtOS4xODN2OS4zMDFjMCAxLjQ2NyAwIDIuNDA1LTEuMDI3IDIuNDA1cy0xLjAyNy0uOTM4LTEuMDI3LTIuNDA1di05LjMwMWMwLTEuNDk2IDAtMi40MzYgMS4wMjctMi40MzZzMS4wMjcuOTQgMS4wMjcgMi40MzZ6bTE0LjM3NiAyLjIzdi0xLjk5NmMwLTQuNDAxLTIuMDUzLTUuODY4LTQuOTg3LTUuODY4aC0zLjUyMWMtLjQ0IDAtLjU4Ny4xNDctLjU4Ny41ODd2MTkuMzY1YzAgLjQ0LjExNy41ODcuNTg3LjU4N2gyLjM0N2MuNDEgMCAuNTg3LS4xNDYuNTg3LS41ODdWMjMuMTljMC0uNTg3IDAtLjU4Ny41ODctLjU4NyAyLjkzNCAwIDQuOTg3LTEuNDY2IDQuOTg3LTUuODM4em0tNS41NzQtNC4wNzljMC0uNTg3IDAtLjU4Ny41ODctLjU4NyAxLjQ2NiAwIDEuNDY2IDEuNDk3IDEuNDY2IDIuOTkzdjEuMzJjMCAxLjQ5NiAwIDIuOTkzLTEuNDY2IDIuOTkzLS41ODcgMC0uNTg3IDAtLjU4Ny0uNTI4di02LjE5em0xMC44NTUgMS43OWMwLTEuNDY3IDAtMi40MDYgMS4wMjctMi40MDYgMS4wMjggMCAxLjAyOC45NCAxLjAyOCAyLjQwNnYuODhjMCAuNDQuMTQ1LjU4Ni41ODcuNTg2aDIuMzQ2Yy40NCAwIC41ODctLjE0NS41ODctLjU4N3YtLjc2YzAtNC40MDMtMS42MTQtNS44Ny00LjU0OC01Ljg3cy00LjU0OCAxLjQzNy00LjU0OCA1Ljg3djkuMTIzYzAgNC40MzEgMS42MTQgNS44NyA0LjU0OCA1Ljg3czQuNTQ3LTEuNDcgNC41NDctNS44N3YtLjczM2MwLS40NC0uMTQ1LS41ODctLjU4Ni0uNTg3aC0yLjM0NmMtLjQ0MiAwLS41ODcuMTQ3LS41ODcuNTg3di44NTFjMCAxLjQ2NyAwIDIuNDA1LTEuMDI4IDIuNDA1LTEuMDI3IDAtMS4wMjctLjkzOC0xLjAyNy0yLjQwNXYtOS4zNnpNOTYuNSAyOS40MzloNi4xOTFjLjQ0IDAgLjU4Ny0uMTQ2LjU4Ny0uNTg3di0yLjE3MWMwLS40NC0uMTQ3LS41ODYtLjU4Ny0uNTg2aC0yLjY0MWMtLjYxNiAwLS42MTYgMC0uNjE2LS42MTdWOS40ODhjMC0uNDQtLjE0Ni0uNTg4LS41ODctLjU4OGgtMi4zNDdjLS40NCAwLS41ODYuMTQ3LS41ODYuNTg3djE5LjM2NWMwIC40NC4xNDUuNTg3LjU4Ni41ODd6bTEzLjA4Ni0xOS45NTJ2MTQuMzQ4YzAgMS40NjcgMCAyLjQwNS0xLjAyNyAyLjQwNS0xLjAyOCAwLTEuMDI4LS45MzgtMS4wMjgtMi40MDVWOS40ODdjMC0uNDQtLjE0Ni0uNTg3LS41ODctLjU4N2gtMi4zNDdjLS40NCAwLS41ODcuMTQ3LS41ODcuNTg3djE0LjIzYzAgNC40MzEgMS42MTUgNS44NyA0LjU0OSA1Ljg3czQuNTQ3LTEuNDcgNC41NDctNS44N1Y5LjQ4N2MwLS40NC0uMTQ2LS41ODctLjU4Ny0uNTg3aC0yLjM0NmMtLjQ0IDAtLjU4Ny4xNDctLjU4Ny41ODd6bTUuODY4IDE5Ljk1Mmg2LjMzN2MuNDQgMCAuNTg3LS4xNDYuNTg3LS41ODd2LTIuMTcxYzAtLjQ0LS4xNDctLjU4Ni0uNTg3LS41ODZoLTIuODE3Yy0uNTg3IDAtLjU4NyAwLS41ODctLjU4N3YtNC42MzZjMC0uNTg3IDAtLjU4Ny41ODctLjU4N2gyLjgxN2MuNDQgMCAuNTg3LS4xNDcuNTg3LS41ODd2LTIuMTcyYzAtLjQ0LS4xNDctLjU4Ni0uNTg3LS41ODZoLTIuODE3Yy0uNTg3IDAtLjU4NyAwLS41ODctLjU4N3YtMy41MjJjMC0uNTg2IDAtLjU4Ni41ODctLjU4NmgyLjgxN2MuNDQgMCAuNTg3LS4xNDcuNTg3LS41ODd2LTIuMTdjMC0uNDQtLjE0Ny0uNTg4LS41ODctLjU4OGgtNi4zMzdjLS40NDEgMC0uNTg3LjE0Ny0uNTg3LjU4N3YxOS4zNjVjMCAuNTg3LjI5My41ODcuNTg3LjU4N3ptMTEuNzY1LTE1LjMxNmMwLTEuMDg1IDAtMi4wMjUgMS4wMjctMi4wMjUgMS4wMjYgMCAxLjAyNiAxLjIwMyAxLjAyNiAyLjA4MyAwIC40NC4xNDguNTg3LjU4Ny41ODdoMi4zMTljLjQ0IDAgLjU4Ny0uMjkzLjU4Ny0uNzMyIDAtMy4xNy0xLjUyNi01LjI4Mi00LjY2Ni01LjI4Mi0yLjkzNCAwLTQuNDAxIDEuOTY2LTQuNDAxIDQuNjA2IDAgMi4zMTkuMjkzIDMuNDA0IDMuMTEgNi43MTkgMS41NTUgMS44MiAyLjQzNiAzLjAyMyAyLjQzNiA0LjEzOCAwIDEuMDg1IDAgMi4wMjQtMS4wMjggMi4wMjQtMS4wMjYgMC0xLjAyNi0xLjIwMy0xLjAyNi0yLjA4NCAwLS40NC0uMTQ4LS41ODctLjU4Ny0uNTg3aC0yLjMxOGMtLjQ0MSAwLS41ODcuMjk0LS41ODcuNzM0IDAgMy4xNyAxLjUyNSA1LjI4MiA0LjY2NSA1LjI4MiAyLjkzNCAwIDQuNDAyLTEuOTY2IDQuNDAyLTQuNjA3IDAtMi4zMTgtLjI2NC0zLjQwNC0zLjA4MS02LjcyLTEuNTU2LTEuODE4LTIuNDY1LTMuMDItMi40NjUtNC4xMzZ6IiBmaWxsPSIjMDAzMDM3Ii8+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9InJybHRlMG5nbmEiIHgxPSIxNy4yNzgiIHkxPSIxNS45MjQiIHgyPSIxNy4yNzgiIHkyPSI0NCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMDA5Q0FEIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzAxOEVBMiIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=" alt="" />
          </a>
        </div>
        <div id="searchBar">
          <span>
            <input
              type="text"
              placeholder="What is on your mind today?"
              id="getinput"
            />
            <button className="srch_btn">Search</button>
          </span>
        </div>
        <div id="sellListbtm">
          <ul>
            <li>
              <span id="pin">421005</span>
              <i className="fa fa-map-marker-alt"></i>
            </li>
            <li>
              <i className="far fa-bell"></i>
            </li>
            <li>
              <i className="far fa-heart"></i>
            </li>
            <li>
              <a href="/cart">
                <i className="fa fa-shopping-cart" id="showcart">
                  <span id="qty">1</span>
                </i>
              </a>
              <div className="hover_content1">
                <div id="quickCart">
                  <div className="nItems"></div>
                  <div className="listItem"></div>
                  <div className="btnContainer">
                    <a href="/cart">View Cart</a>
                    <a href="">Place Order</a>
                  </div>
                </div>
              </div>
            </li>
            <li id="signin">
              <a id="login_sucess">Sign In</a>
              <div className="hover_content">
                <div id="userHeading">
                  <i className="fal fa-user-circle"></i>
                  <span id="login_sucess1">Login/Register</span>
                  <p>Join VIP club</p>
                </div>
                <ul id="gotouserpage">
                  <li>
                    <i className="fas fa-clipboard-list"></i>
                    My Orders
                  </li>
                  <li>
                    <i className="fas fa-comment-alt-dots"></i>
                    My Returns
                  </li>
                  <li>
                    <i className="far fa-heart"></i>
                    Wishlist
                  </li>
                  <li>
                    <i className="far fa-user-circle"></i>
                    My Profile
                  </li>
                  <li>
                    <i className="far fa-comment-alt-dots"></i>
                    My Chat
                  </li>
                  <li>
                    <i className="fas fa-rupee-sign"></i>
                    My CluesBucks
                  </li>
                  <li>
                    <i className="far fa-comment-alt-edit"></i>
                    My Feedback
                  </li>
                  <li>
                    <i className="far fa-user-headset"></i>
                    Help & Support
                  </li>
                  <li>
                    <i className="fal fa-rupee-sign"></i>
                    My Favorite Stores
                  </li>
                  <li id="signout">
                    <i className="fa fa-sign-out"></i>
                    Sign Out
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="main_navigation">
        <div id="wrapper">
          <ul>
            <li id="madeIN">
              <a href="">
                <img
                  src="https://images.shopclues.com/images/ui/madeinindia.png"
                  alt="madeInIndia"
                />
              </a>
            </li>
            <li id="nav1"  >
              <a href="#">Mobiles & More</a>
              <div className="menu_wrap">
                <div className="ul_menu_block">
                  <div id="column_1" className="s_col">
                    <ul>
                      <li>
                        <strong>
                          <a href="#">Smartphones & Tablets</a>
                        </strong>
                      </li>
                      <li>
                        <a href="#">I KALL</a>
                      </li>
                      <li>
                        <a href="#">Mi</a>
                      </li>
                      <li>
                        <a href="#">Realme</a>
                      </li>
                      <li>
                        <a href="#">Samsung</a>
                      </li>
                      <li>
                        <a href="#">Vivo</a>
                      </li>
                      <li>
                        <a href="#">Oppo</a>
                      </li>
                      <li>
                        <a href="#">Apple</a>
                      </li>
                      <li>
                        <a href="#">Techno</a>
                      </li>
                      <li>
                        <a href="#">Infinix</a>
                      </li>
                      <li>
                        <a href="#">Micromax</a>
                      </li>
                      <li>
                        <strong>Refurbished Smartphones</strong>
                      </li>
                      <li>
                        <strong>Refurbished Feature Phones</strong>
                      </li>
                    </ul>
                  </div>
                  <div id="column_2" className="s_col">
                    <ul>
                      <li>
                        <strong>Feature Phones</strong>
                      </li>
                      <li>Micromax</li>
                      <li>I KALL</li>
                      <li>Nokia</li>
                      <li>MTR</li>
                      <li>Heemax</li>
                      <li>Karbonn</li>
                      <li>Kechaoda</li>
                      <li>Gfive</li>
                      <li>Blackbear</li>
                      <li>Samsung</li>
                      <li>
                        <strong>Gaming Consoles</strong>
                      </li>
                      <li>Gaming Titles</li>
                      <li>Gaming Accessories</li>
                    </ul>
                  </div>
                  <div id="column_3" className="s_col">
                    <ul>
                      <li>
                        <strong>Bestsellers in Accessories</strong>
                      </li>
                      <li>Top Rated Accessories</li>
                      <li>Combos</li>
                      <li>Power Banks</li>
                      <li>Cases & Covers</li>
                      <li>Mobile Holders</li>
                      <li>Cables</li>
                      <li>Adapter & Chargers</li>
                      <li>Selfie Sticks</li>
                      <li>
                        <strong>Storage Devices</strong>
                      </li>
                      <li>Memory Cards</li>
                      <li>Pen Drives</li>
                      <li>External Hard disks</li>
                    </ul>
                  </div>
                  <div id="column_4" className="s_col">
                    <ul>
                      <li>
                        <strong>Branded Accessories</strong>
                      </li>
                      <li>Tiitan</li>
                      <li>Toshiba</li>
                      <li>Sandisk</li>
                      <li>Philips</li>
                      <li>Portronics</li>
                      <li>Zebronics</li>
                      <li>Boat</li>
                      <li>Syska</li>
                      <li>JBL</li>
                      <li>
                        <strong>Audio Store</strong>
                      </li>
                      <li>Headphones & Earphones</li>
                      <li>Bluetooth Earphones</li>
                      <li>Bluetooth Speakers</li>
                    </ul>
                  </div>
                  <div id="column_5" className="s_col">
                    <ul>
                      <li>
                        <strong>Laptops</strong>
                      </li>
                      <li>HP</li>
                      <li>Lenovo</li>
                      <li>Asus</li>
                      <li>Acer</li>
                      <li>Coconics</li>
                      <li>
                        <strong>Refurbished Laptops</strong>
                      </li>
                      <li>
                        <strong>Laptop Accessories</strong>
                      </li>
                      <li>Mouse</li>
                      <li>Keyboards</li>
                      <li>Laptop Bags</li>
                      <li>Laptop Skins</li>
                      <li>
                        <strong>Printers</strong>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li id="nav2">
              <a href="">MEN</a>
              <div className="menu_wrap">
                <div className="ul_menu_block">
                  <div id="column_1" className="s_col">
                    <ul>
                      <li>
                        <strong>Men's Clothing</strong>
                      </li>
                      <li>T-shirt</li>
                      <li>Shirt</li>
                      <li>Jeans</li>
                      <li>Cargos</li>
                      <li>Trousers</li>
                      <li>Track Pants</li>
                      <li>Shorts & 3/4th</li>
                      <li>Jackets</li>
                      <li>Ethnic Wear</li>
                      <li>Winter wear</li>
                      <li>Inner & Sleepwear</li>
                      <li>29K Store</li>
                      <li>
                        <strong>Sportswear</strong>
                      </li>
                    </ul>
                  </div>
                  <div id="column_2" className="s_col">
                    <ul>
                      <li>
                        <strong>Footwear</strong>
                      </li>
                      <li>Casual Shoes</li>
                      <li>Sports Shoes</li>
                      <li>Formal Shoes</li>
                      <li>Sandals & Floaters</li>
                      <li>Slippers & Flip Flops</li>
                      <li>Loafers And Moccasins</li>
                      <li>Boots</li>
                      <li>Ethnic</li>
                      <li>Speciality Footwear</li>
                      <li>Shoe Care Kit & Accessories</li>
                      <li>Top Selling Brands</li>
                    </ul>
                  </div>
                  <div id="column_3" className="s_col">
                    <ul>
                      <li>
                        <strong>Men's Watches</strong>
                      </li>
                      <li>Watch Combos</li>
                      <li>Couple Watches</li>
                      <li>Fastrack, Sonata & More</li>
                      <li>Budget Watches</li>
                      <li>Smart Watches</li>
                      <li>
                        <strong>Men's Jewellery</strong>
                      </li>
                      <li>Fashion Jewellery</li>
                      <li>Chains & Pendants</li>
                      <li>Precious Jewellery</li>
                      <li>Silver Jewellery</li>
                      <li>Coins & Collectibles</li>
                    </ul>
                  </div>
                  <div id="column_4" className="s_col">
                    <ul>
                      <li>
                        <strong>Fragrances</strong>
                      </li>
                      <li>Fragrance Combos and Kits</li>
                      <li>Deodorants</li>
                      <li>
                        <strong>Grooming</strong>
                      </li>
                      <li>Beard & Moustache Care</li>
                      <li>Men's Shaving</li>
                      <li>Grooming Appliances</li>
                      <li>Bath Essentials</li>
                      <li>Oral Care</li>
                      <li>Skin Care</li>
                      <li>Hair Care</li>
                      <li>
                        <strong>Eyewear</strong>
                      </li>
                      <li>Sunglasses</li>
                      <li>Spectacle Frames</li>
                    </ul>
                  </div>
                  <div id="column_5" className="s_col">
                    <ul>
                      <li>
                        <strong>Fashion Accessories</strong>
                      </li>
                      <li>Wallets</li>
                      <li>Belts</li>
                      <li>Socks</li>
                      <li>Caps</li>
                      <li>Winter Accessories</li>
                      <li>Men's Accessories Gift Sets</li>
                      <li>
                        <strong>Bags & luggage</strong>
                      </li>
                      <li>Backpacks & Laptop Bags</li>
                      <li>Gym Bags</li>
                      <li>Trolleys & Duffle Bags</li>
                      <li>Travel Accessories</li>
                      <li>Messenger Bags</li>
                      <li>Rucksacks</li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li id="nav3">
              <a href="">WOMEN</a>
              <div className="menu_wrap">
                <div className="ul_menu_block">
                  <div id="column_1" className="s_col">
                    <ul>
                      <li>
                        <strong>Ethnic Wear</strong>
                      </li>
                      <li>Sarees</li>
                      <li>Kurtas & Kurtis</li>
                      <li>Lehengas & Party Gowns</li>
                      <li>Dress Material</li>
                      <li>Leggings & Churidar</li>
                      <li>Meia Store</li>
                      <li>
                        <strong>Western Wear</strong>
                      </li>
                      <li>Tops & Tees</li>
                      <li>Dresses</li>
                      <li>Jeans & Jeggings</li>
                      <li>Pants & Trousers</li>
                      <li>Skirts</li>
                      <li>Code Yellow Store</li>
                    </ul>
                  </div>
                  <div id="column_2" className="s_col">
                    <ul>
                      <li>
                        <strong>Lingerie</strong>
                      </li>
                      <li>Bra</li>
                      <li>Panties</li>
                      <li>Sleepwear</li>
                      <li>Shapewear</li>
                      <li>Lingerie Sets</li>
                      <li>
                        <strong>Footwear</strong>
                      </li>
                      <li>Casual Shoes</li>
                      <li>Flats & Sandals</li>
                      <li>Women's Heels & Pumps</li>
                      <li>Women Sports Shoes</li>
                      <li>Wedges</li>
                      <li>Women's Bellies</li>
                      <li>Flip Flops & Slippers</li>
                    </ul>
                  </div>
                  <div id="column_3" className="s_col">
                    <ul>
                      <li>
                        <strong>All Jewellery</strong>
                      </li>
                      <li>Fashion Jewellery</li>
                      <li>Pendant & Necklace Sets</li>
                      <li>Mangalsutra & Bangles</li>
                      <li>Earrings & Rings</li>
                      <li>Gold & Diamond Jewellery</li>
                      <li>Silver Jewellery</li>
                      <li>Coins & Collectibles</li>
                      <li>
                        <strong>Women's Watches</strong>
                      </li>
                      <li>Casual Wear Watches</li>
                      <li>Office Wear Watches</li>
                      <li>Branded Watches</li>
                      <li>Budget Watches</li>
                      <li>
                        <strong>Couple Watches</strong>
                      </li>
                    </ul>
                  </div>
                  <div id="column_4" className="s_col">
                    <ul>
                      <li>
                        <strong>Beauty & Perfumes</strong>
                      </li>
                      <li>Skin Care</li>
                      <li>Make-Up</li>
                      <li>Hair Care</li>
                      <li>Personal Care & Grooming</li>
                      <li>Beauty Accessories</li>
                      <li>Grooming Appliances</li>
                      <li>Bath Essentials</li>
                      <li>Oral Care</li>
                      <li>Women Hygiene</li>
                      <li>
                        <strong>Fragrances</strong>
                      </li>
                      <li>Perfumes</li>
                      <li>Deodorants</li>
                    </ul>
                  </div>
                  <div id="column_5" className="s_col">
                    <ul>
                      <li>
                        <strong>Fashion Accessories</strong>
                      </li>
                      <li>Socks & Stockings</li>
                      <li>Hair Accessories</li>
                      <li>Scarves & Stoles</li>
                      <li>Belts</li>
                      <li>Handkerchiefs</li>
                      <li>Shawls</li>
                      <li>
                        <strong>Bags & luggage</strong>
                      </li>
                      <li>Backpacks & Laptop Bags</li>
                      <li>Gym Bags</li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            <li id="nav4">
              <a href="">HOME & KITCHEN</a>
              <div className="menu_wrap">
                <div className="ul_menu_block">
                  <div id="column_1" className="s_col">
                    <ul>
                      <li>
                        <strong>Kitchen & Dining</strong>
                      </li>
                      <li>Dinner sets</li>
                      <li>Cookware</li>
                      <li>Container Sets</li>
                      <li>Kitchen tools</li>
                      <li>Lunch box</li>
                      <li>Kitchen storage</li>
                      <li>
                        <strong>Kitchen Appliances</strong>
                      </li>
                      <li>Gas Cooktops</li>
                      <li>Juicer Mixer Grinders</li>
                      <li>Induction Cooktops</li>
                      <li>Kettles</li>
                      <li>Sandwich Makers</li>
                      <li>Blenders and choppers</li>
                    </ul>
                  </div>
                  <div id="column_2" className="s_col">
                    <ul>
                      <li>
                        <strong>Home Furnishing</strong>
                      </li>
                      <li>Home Berry</li>
                      <li>Bedsheets</li>
                      <li>Curtains</li>
                      <li>Carpets & Rugs</li>
                      <li>Blankets</li>
                      <li>Towels</li>
                      <li>Furnishing Combos</li>
                      <li>
                        <strong>Bathroom & Sanitaryware</strong>
                      </li>
                      <li>Sanitaryware</li>
                      <li>Bathroom Fixtures</li>
                      <li>Bathing Utilities</li>
                      <li>Bathroom Mirror and Cabinets</li>
                      <li>Faucets and Jet sprays</li>
                    </ul>
                  </div>
                  <div id="column_3" className="s_col">
                    <ul>
                      <li>
                        <strong>Lighting Solutions</strong>
                      </li>
                      <li>Led bulbs</li>
                      <li>Tubelights & Battens</li>
                      <li>Rechargeable Lights</li>
                      <li>Electrical</li>
                      <li>Panel & Ceiling Lights</li>
                      <li>
                        <strong>Tools & Hardware</strong>
                      </li>
                      <li>Hand Tools</li>
                      <li>Power Tools</li>
                      <li>Safety Equipments</li>
                      <li>
                        <strong>Home Improvement</strong>
                      </li>
                      <li>Cleaning Supplies</li>
                      <li>Laundry Organisation</li>
                      <li>Organisers</li>
                    </ul>
                  </div>
                  <div id="column_4" className="s_col">
                    <ul>
                      <li>
                        <strong>Decor</strong>
                      </li>
                      <li>Clocks</li>
                      <li>Hookahs & Accessories</li>
                      <li>Wall Decor</li>
                      <li>Religion & Spirituality</li>
                      <li>Table Decoratives</li>
                      <li>Garden</li>
                      <li>
                        <strong>Furniture</strong>
                      </li>
                      <li>Inflatable Sofas</li>
                      <li>Storage Furniture</li>
                      <li>Bean Bags</li>
                      <li>Wall Shelves</li>
                      <li>Sofa Sets</li>
                      <li>Beds</li>
                    </ul>
                  </div>
                  <div id="column_5" className="s_col">
                    <ul>
                      <li>
                        <strong>Home Appliance</strong>
                      </li>
                      <li>Water Purifiers</li>
                      <li>Irons</li>
                      <li>Emergency Lights</li>
                      <li>Sewing Machines</li>
                      <li>Vacuum Cleaners</li>
                      <li>Appliances Parts & Components</li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li id="nav5">
              <a href="">APPLIANCES</a>
              <div className="menu_wrap">
                <div className="ul_menu_block">
                  <div id="column_1" className="s_col">
                    <ul>
                      <li>
                        <strong>TV & DTH</strong>
                      </li>
                      <li>Television</li>
                      <li>Full HD</li>
                      <li>HD Ready</li>
                      <li>Ultra HD</li>
                      <li>
                        <strong>Shop TV By Screen</strong>
                      </li>
                      <li>Below 32 Inch</li>
                      <li>32 Inch</li>
                      <li>39 Inch - 42 Inch</li>
                      <li>43 Inch & Above</li>
                      <li>
                        <strong>DTH</strong>
                      </li>
                    </ul>
                  </div>
                  <div id="column_2" className="s_col">
                    <ul>
                      <li>
                        <strong>Large Home Appliances</strong>
                      </li>
                      <li>Air Conditioners</li>
                      <li>Split ACs</li>
                      <li>Window Acs</li>
                      <li>
                        <strong>Stabilizers</strong>
                      </li>
                      <li>
                        <strong>Air Coolers</strong>
                      </li>
                      <li>
                        <strong>Air Purifiers And De-Humidifiers</strong>
                      </li>
                      <li>
                        <strong>Refrigerators</strong>
                      </li>
                      <li>Single Door</li>
                      <li>Double Door</li>
                      <li>Side by Side</li>
                    </ul>
                  </div>
                  <div id="column_3" className="s_col">
                    <ul>
                      <li>
                        <strong>Washing Machine</strong>
                      </li>
                      <li>Semi Automatic</li>
                      <li>Fully Automatic Top Load</li>
                      <li>Fully Automatic Front Load</li>
                      <li>
                        <strong>Geysers</strong>
                      </li>
                      <li>
                        <strong>Heaters</strong>
                      </li>
                      <li>
                        <strong>Inverters</strong>
                      </li>
                      <li>
                        <strong>Large Kitchen Appliances</strong>
                      </li>
                      <li>Chimney & Hoods</li>
                      <li>Microwave and Halogen Ovens</li>
                      <li>OTG</li>
                      <li>Dishwashers</li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li id="nav6">
              <a href="">SPORTS & MORE</a>
              <div className="menu_wrap">
                <div className="ul_menu_block">
                  <div id="column_1" className="s_col">
                    <ul>
                      <li>
                        <strong>Diet Nutrition</strong>
                      </li>
                      <li>Whey Protein</li>
                      <li>Weight Gainers</li>
                      <li>Pre & Post Workout</li>
                      <li>Fat Burners</li>
                      <li>Vitamins & Minerals</li>
                      <li>Ayurveda & Herbal</li>
                      <li>
                        <strong>Healthcare</strong>
                      </li>
                      <li>Flu Care</li>
                      <li>Massage & Relaxation</li>
                      <li>Weighing Scales</li>
                      <li>BP Monitors</li>
                      <li>Supports & Elderly Care</li>
                      <li>General Wellness</li>
                    </ul>
                  </div>
                  <div id="column_2" className="s_col">
                    <ul>
                      <li>
                        <strong>Fitness & Exercise</strong>
                      </li>
                      <li>Ab Exercisers</li>
                      <li>Home Gyms</li>
                      <li>Exercise Bikes</li>
                      <li>Fitness Accessories</li>
                      <li>Treadmills</li>
                      <li>Cardio Equipments</li>
                      <li>
                        <strong>Sports</strong>
                      </li>
                      <li>Cricket Bats</li>
                      <li>Footballs</li>
                      <li>Badminton Racquets</li>
                      <li>Table Tennis</li>
                      <li>Basketball</li>
                      <li>Swimming & Water Sports</li>
                    </ul>
                  </div>
                  <div id="column_3" className="s_col">
                    <ul>
                      <li>
                        <strong>Car Accessories & Electronics</strong>
                      </li>
                      <li>Perfumes & Fresheners</li>
                      <li>Dashboard Accessories</li>
                      <li>Sun Shades</li>
                      <li>Car Body Covers</li>
                      <li>Door & Bumper Guards</li>
                      <li>Car Electronics</li>
                      <li>
                        <strong>Bike Accessories & more</strong>
                      </li>
                      <li>Bike Body Covers</li>
                      <li>Riding Gear</li>
                      <li>Helmets</li>
                      <li>Bike Locks & Alarm Systems</li>
                      <li>Car & Bike Care</li>
                      <li>Tools & Oils</li>
                    </ul>
                  </div>
                  <div id="column_4" className="s_col">
                    <ul>
                      <li>
                        <strong>Beauty & Perfumes</strong>
                      </li>
                      <li>Skin Care</li>
                      <li>Make-Up</li>
                      <li>Hair Care</li>
                      <li>Personal Care & Grooming Products</li>
                      <li>Beauty Accessories</li>
                      <li>
                        <strong>Grooming</strong>
                      </li>
                      <li>Fragrance Combos and Kits</li>
                      <li>Beard & Moustache Care</li>
                      <li>Men's Shaving</li>
                      <li>Grooming Appliances</li>
                      <li>Bath Essentials</li>
                      <li>Oral Care</li>
                    </ul>
                  </div>
                  <div id="column_5" className="s_col">
                    <ul>
                      <li>
                        <strong>Daily Needs & Essentials</strong>
                      </li>
                      <li>Food & Beverages</li>
                      <li>Household Supplies</li>
                      <li>Pet Suplies</li>
                      <li>Regional Sweets and snacks</li>
                      <li>Stationery</li>
                      <li>Books</li>
                      <li>
                        <strong>Gift Cards</strong>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li id="nav7">
              <a href="">ESSENTIALS</a>
              <div className="menu_wrap">
                <div className="ul_menu_block">
                  <div id="column_1" className="s_col">
                    <ul>
                      <li>
                        <strong>Food and Beverage</strong>
                      </li>
                      <li>Oils & Vinegars</li>
                      <li>Pastas & Noodles</li>
                      <li>Coffee & Tea</li>
                      <li>Cakes Biscuits & Chips</li>
                      <li>Dry Fruits Nuts & Seeds</li>
                      <li>Jams Honey & Spreads</li>
                      <li>Mouth Freshners & Digestives</li>
                      <li>Ready to cook</li>
                      <li>Sauces Dips & Pickles</li>
                      <li>
                        <strong>Grocery & Staples</strong>
                      </li>
                      <li>Rice & Flours</li>
                      <li>Pulses</li>
                      <li>Sugar & Jaggery</li>
                    </ul>
                  </div>
                  <div id="column_2" className="s_col">
                    <ul>
                      <li>
                        <strong>Household Supplies</strong>
                      </li>
                      <li>Laundry and Detergents</li>
                      <li>Disposables</li>
                      <li>Pooja Essentials</li>
                      <li>Repellents & Devices</li>
                      <li>
                        <strong>Ayurveda & Herbal</strong>
                      </li>
                      <li>
                        <strong>Flu Care</strong>
                      </li>
                      <li>
                        <strong>Medical Equipment & Accessories</strong>
                      </li>
                      <li>
                        <strong>Nutrition & Supplements</strong>
                      </li>
                      <li>Ayurveda & Herbal</li>
                      <li>Family Nutrition</li>
                      <li>Vitamins and Minerals</li>
                    </ul>
                  </div>
                  <div id="column_3" className="s_col">
                    <ul>
                      <li>
                        <strong>Personal Care and Grooming</strong>
                      </li>
                      <li>Men's Grooming</li>
                      <li>Feminine Hygiene</li>
                      <li>Oral Care</li>
                      <li>Hair Care</li>
                      <li>Fragrances</li>
                      <li>
                        <strong>Baby Care</strong>
                      </li>
                      <li>Baby Food</li>
                      <li>Bath & Skin Care</li>
                      <li>Diapers & Wipes</li>
                      <li>
                        <strong>Pet Supplies</strong>
                      </li>
                    </ul>
                  </div>
                  <div id="column_4" className="s_col">
                    <ul>
                      <li>
                        <strong>Top Brands</strong>
                      </li>
                      <li>
                        <strong>Himalaya</strong>
                      </li>
                      <li>
                        <strong>Cadbury</strong>
                      </li>
                      <li>
                        <strong>Veet</strong>
                      </li>
                      <li>
                        <strong>Pharma</strong>
                      </li>
                      <li>Ayurveda</li>
                      <li>Pain Relief</li>
                      <li>Sexual Wellness</li>
                      <li>Homeopathy</li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li id="nav8">
              <a href="">OFFERS</a>
              <div className="menu_wrap">
                <div className="ul_menu_block">
                  <div id="column_1" className="s_col">
                    <ul>
                      <li>
                        <strong>All Offers</strong>
                      </li>
                      <li>
                        <strong>Kotra Top Sellers</strong>
                      </li>
                      <li>
                        <strong>Season Essentials</strong>
                      </li>
                      <li>Womens Tops & Skirts</li>
                      <li>FlipFlops</li>
                      <li>Mens Shorts</li>
                      <li>
                        <strong>Kitchen Essentials</strong>
                      </li>
                      <li>
                        <strong>Popular Categories</strong>
                      </li>
                      <li>Women Ethnic</li>
                      <li>Mens Tshirt</li>
                      <li>Watches</li>
                      <li>Mens Footwear</li>
                      <li>Women Western</li>
                      <li>Home Furnishing</li>
                    </ul>
                  </div>
                  <div id="column_2" className="s_col">
                    <ul>
                      <li>
                        <strong>Wholesale</strong>
                      </li>
                      <li>Mobile and Laptop Accessories</li>
                      <li>Fashion</li>
                      <li>Home & Kitchen</li>
                      <li>Footwear</li>
                      <li>
                        <strong>Featured Brands</strong>
                      </li>
                      <li>Stylogue</li>
                      <li>Ikall</li>
                      <li>eglob</li>
                      <li>Walltola</li>
                      <li>Seagate HD</li>
                      <li>DCH</li>
                    </ul>
                  </div>
                  <div id="column_3" className="s_col">
                    <ul>
                      <li>
                        <strong>New Arrivals</strong>
                      </li>
                      <li>Lifestyle</li>
                      <li>Home & Living</li>
                      <li>Electronic</li>
                      <li>Daily Utility</li>
                      <li>
                        <strong>Explore Our Stores</strong>
                      </li>
                      <li>Saree Fest</li>
                      <li>Watch Carnival</li>
                      <li>Lighting Shoppe</li>
                      <li>Jeans Fest</li>
                      <li>Mobile Accessories</li>
                      <li>Bed Sheets</li>
                    </ul>
                  </div>
                  <div id="column_4" className="s_col">
                    <ul>
                      <li>
                        <strong>Shop By Price</strong>
                      </li>
                      <li>Under 99</li>
                      <li>Under 199</li>
                      <li>Under 249</li>
                      <li>Under 349</li>
                      <li>
                        <strong>Shop By Discount</strong>
                      </li>
                      <li>Upto 25% Off</li>
                      <li>Upto 50% Off</li>
                      <li>Upto 60% Off</li>
                      <li>Upto 80% Off</li>
                    </ul>
                  </div>
                  <div id="column_5" className="s_col">
                    <ul>
                      <li>
                        <strong>Buy More Save More</strong>
                      </li>
                      <li>Ethnic Wear Combo</li>
                      <li>Men Combo</li>
                      <li>Watch Combo</li>
                      <li>Footwear Combo</li>
                      <li>
                        <strong>Best Offers</strong>
                      </li>
                      <li>Korean Avenue</li>
                      <li>Refer & Earn</li>
                      <li>Wholesale</li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            <li id="nav9">
              <a href="">GLOBAL SHOPPING</a>
            </li>
          </ul>
        </div>
      </div>
      <div id="back">
        <div className="popup_signin">
          <div className="points">
            <ul>
              <li>
                <i className="fas fa-hand-holding-usd"></i>
                <h6>Loyalty Points</h6>
                <p>Earn CluesBucks on prepaid orders</p>
              </li>
              <li>
                <i className="fas fa-cart-arrow-down"></i>
                <h6>Instant Checkout</h6>
                <p>Hassle-Free Payment Everytime</p>
              </li>
              <li>
                <i className="fas fa-badge-percent"></i>
                <h6>Exclusive Offers</h6>
                <p>For special offers & value deals</p>
              </li>
            </ul>
          </div>
          <div id="page_signin">
            <div id="select_op">
              <h2 id="showin">LOGIN</h2>
              <h2 id="showster">REGISTER</h2>
              <button id="closetab">
                <i className="fal fa-times"></i>
              </button>
            </div>
            <div className="signinShow">
              <form>
                <input
                  type="text"
                  placeholder="Enter your username"
                  id="username2"
                />
                <input
                  type="password"
                  placeholder="Enter your password"
                  id="password2"
                />
                <input type="submit" value="Login" id="checkdetail" />
              </form>
              <h3>Social Login</h3>
              <button>Continue with Facebook</button>
            </div>
            <div className="signup">
              <form>
                <input
                  type="email"
                  placeholder="Enter your email id"
                  id="email"
                />
                <p id="emailError"></p>
                <input
                  type="number"
                  placeholder="Enter your mobile number"
                  id="number"
                />
                <p id="MobileError"></p>
                <input
                  type="text"
                  placeholder="Enter your username"
                  id="username1"
                />
                <p id="UsernameError"></p>
                <input
                  type="password"
                  placeholder="Enter your password"
                  id="password1"
                />
                <p id="PasswordError"></p>
                <input type="submit" value="Register" id="storedetail" />
              </form>
              <h3>Register With</h3>
              <button>Continue with Facebook</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
