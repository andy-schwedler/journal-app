console.clear();

export function Memories() {
  return (
    <>
      <article className="Memory--Container">
        <p className="Memory--Container__date">Nov 18, 2022</p>
        <div className="Memory--Container__header">
          <h2 className="entry--header">Motto</h2>
          <img alt="bookmark" />
        </div>
        <p className="loggedjournalnotes">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </p>
      </article>
      <article className="Memory--Container">
        <p className="Memory--Container__date">Nov 18, 2022</p>
        <div className="Memory--Container__header">
          <h2 className="entry--header">Motto 2</h2>
          <img alt="bookmark" />
        </div>
        <p className="loggedjournalnotes">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </p>
      </article>
    </>
  );
}
