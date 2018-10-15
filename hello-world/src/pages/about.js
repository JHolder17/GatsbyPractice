import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"

export default () => (
    <Layout>
        <div style={{ color: `teal` }}>
            <Header headerText="About 123 Gatsby" />
            <h3>Joseph Holder</h3>
            <p>Such wow. Very React.</p>
        </div>
    </Layout>
)