export function Main() {
  return (
    <>
      <main className="content">
        <form className="EntryForm">
          <h3>New Entry</h3>
          <label class="FormLabel" htmlFor="Motto">
            Motto
          </label>
          <input className="userinput" />
          <label class="FormLabel" htmlFor="Notes">
            Notes
          </label>
          <textarea className="userinputtextarea" name="Notes" />
          <button type="submit" className="button">
            create
          </button>
        </form>
        <section className="Tab">
          <article className="allEntries">
            <p>All Entries</p>
            <p>C</p>
          </article>
          <article className="allFavorites">
            <p>Favorites</p>
            <p>C</p>
          </article>
        </section>
        <section className="Entries">
          <article className="Memory--Container">
            <p className="Memory--Container__date">Nov 18, 2022</p>
            <div className="Memory--Container__header">
              <h2 className="entry--header">Motto</h2>
              <img alt="bookmark" />
            </div>
            <p className="loggedjournalnotes">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </p>
          </article>
          <article className="Memory--Container">
            <p className="Memory--Container__date">Nov 18, 2022</p>
            <div className="Memory--Container__header">
              <h2 className="entry--header">Motto</h2>
              <img alt="bookmark" />
            </div>
            <p className="loggedjournalnotes">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </p>
          </article>
        </section>
      </main>
    </>
  );
}
