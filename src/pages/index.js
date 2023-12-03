export default function Page() {
  return <p>Home Page</p>;
}

Page.getLayout = function getLayout(page) {
  return <div className="container">{page}</div>;
};
