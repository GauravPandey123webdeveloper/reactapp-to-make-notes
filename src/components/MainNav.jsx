import React from "react";
import "./Main.css";
import { useRecoilState } from "recoil";
import DataFromLocal from "../Storage/DataFromLocal";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

export default function MainNav() {
  let [state, setState] = useRecoilState(DataFromLocal);
  let [search, SetSearch] = useSearchParams();
  let nav = useNavigate();
  return (
    <div className="Nav_Parent">
      <h1 className="Nav_Heading">Glyph Notes</h1>
      <div className="All_Nav_btns">
        {(state.state === "home" || state.state === "read") &&
          search.get("id") !== "newNote" && (
            <Link to="/editor?id=newNote">
              <button className="Nav_btn">
                <i className="fa-solid fa-file-circle-plus " /> New Note
              </button>
            </Link>
          )}
        {search.get("id") === "newNote" && (
          <button
            className="Nav_btn"
            onClick={() => {
              setState({ ...state, state: "home" });
              nav("/");
              console.log("deleted");
            }}
          >
            <i class="fa-solid fa-file-circle-xmark"></i> Cancel
          </button>
        )}
        {state.state === "read" && search.get("id") !== "newNote" && (
          <Link to={`/editor?id=${search.get("id")}`}>
            <button
              className="Nav_btn"
              onClick={() => setState((prev) => ({ ...prev, state: "edit" }))}
            >
              <i className="fa-solid fa-file-pen" /> edit
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}
