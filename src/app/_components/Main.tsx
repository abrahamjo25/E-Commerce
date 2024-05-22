import React from "react";

interface MainProps {
  sidebarToggle: boolean;
}

const Main = ({ sidebarToggle }: MainProps) => {
  return (
    <div className={`py-3 ${sidebarToggle ? "hidden" : "block"}`}>
      The Home page Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
      iure optio! Officiis nisi, id quisquam illo ducimus temporibus ratione
      suscipit nobis voluptate reiciendis quod debitis, quidem, doloremque
      necessitatibus obcaecati repellendus! This is the home page
    </div>
  );
};

export default Main;
