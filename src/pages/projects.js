import * as React from "react"

import Layout from "../components/layout"
import ProjectsGrid from "../components/projects"
import SEO from "../components/seo"

const ProjectsPage = () => (
  <main className="container">
    <Layout>
      <SEO title="Projects" />
     	<ProjectsGrid />
    </Layout>
  </main>
)

export default ProjectsPage
