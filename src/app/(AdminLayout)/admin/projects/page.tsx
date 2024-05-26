import React from "react";

const ProjectsPage = () => {
  const handleCreateProject = (data: any) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleCreateProject}>
      <input type="text" name="title" id="title" />
      <input type="text" name="description" id="description" />
      <input type="text" name="image" id="image" />
      <input type="text" name="live-link" id="live-link" />
      <input type="text" name="client-link" id="client-link" />
      <input type="text" name="server-link" id="server-link" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ProjectsPage;
