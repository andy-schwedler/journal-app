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
        <section className="EntriesAndTabs">
          <p>All Entries</p>
          <p>C</p>
          <p>Favorites</p>
          <p>C</p>
        </section>
        <article className="entry--flexbox">
          <p className="entry--date">Nov 18, 2022</p>
          <h2 className="entry--header">Motto</h2>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </p>
        </article>
        <article>
          <p className="entry--date">Nov 18, 2022</p>
          <h2>Motto</h2>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </p>
        </article>
      </main>
    </>
  );
}
