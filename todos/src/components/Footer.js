import React from "react";
import FilterLink from "../containers/FilterLink";

const Footer = () => {
   return (
        <div>
            Show: { " " }
            <span>
                <FilterLink filter="SHOW_ALL">
                    All
                </FilterLink>
            </span>
            { ", " }
            <span>
                <FilterLink filter="SHOW_ACTIVE">
                    Active
                </FilterLink>
            </span>
            { ", " }

        <span>
                <FilterLink filter="SHOW_COMPLETED">
                    Completed
                </FilterLink>
        </span>
    </div>
   )
}

export default Footer;