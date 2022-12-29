import { Layout } from "../components/layout/Layout";
import { CoverBodyActionsCard } from "../components/ui";
import { Card } from "../components/ui/UIcards/main/MainCard";

export const NotFound = () => {
  return (
    <Layout>
      <CoverBodyActionsCard
        // title='Card Title'
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
      </CoverBodyActionsCard>

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

      <Card>
        <h1>Not found</h1>
        <p>The page you&apos;re looking for was not found.</p>
      </Card>

      <Card>sdf</Card>
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
