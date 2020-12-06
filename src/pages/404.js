import React from "react"
import Layout from "../layouts/default"
import Meta from "../components/meta"
import Section from "../components/section"
import { Link } from "gatsby"


export default () => (
    <Layout>
        <Meta title="404" />
        <Section title="Page Not Found">
        <h3><Link to="/">Go Back</Link></h3>
        </Section>
    </Layout>
);
