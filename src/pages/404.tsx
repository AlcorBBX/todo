import { Card } from "@components/ui";
import { Layout } from "@components/layout/Layout";

export const NotFound = () => {
  return (
    <Layout title='not-found'>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card>
          <h1>Not found</h1>
          <p>The page you&apos;re looking for was not found.</p>
        </Card>
      </div>
    </Layout>
  );
};
