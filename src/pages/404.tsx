import { useState } from "react";
import { Layout } from "../components/layout/Layout";
import { Card } from "../components/ui";

export const NotFound = () => {
  const [loading, setLoading] = useState<boolean>(true);

  setTimeout(() => {
    setLoading(false);
  }, 2000);

  return (
    <Layout>
      <Card
        loading={loading}
        cover={
          <img
            alt='example'
            src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
          />
        }
        actions={[<Actions />]}
      >
        <h1>Not found</h1>
        <p>The page you&apos;re looking for was not found.</p>
      </Card>

      <Card title='Card Title' actions={[<Actions />]}>
        <h1>Not found</h1>
        <p>The page you&apos;re looking for was not found.</p>
      </Card>

      <Card actions={[<Actions />]}>
        <h1>Not found</h1>
        <p>The page you&apos;re looking for was not found.</p>
      </Card>
      <Card title='Title'>
        <h1>Not found</h1>
        <p>The page you&apos;re looking for was not found.</p>
      </Card>

      <Card loading={loading}>
        <h1>Not found</h1>
        <p>The page you&apos;re looking for was not found.</p>
      </Card>

      <Card style={{backgroundColor: 'white'}} loading={loading}><p>Body fsdfhj</p></Card>
    </Layout>
  );
};

export const Actions = () => {
  return (
    <>
      <button>button</button>
      <button>button</button>
      <button>button</button>
    </>
  );
};
