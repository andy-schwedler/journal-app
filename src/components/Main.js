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
          <article className="tab">
            <p>All Entries</p>
            <p className="counter">C</p>
            <p>Favorites</p>
            <p className="counter">C</p>
          </article>
          <article className="entry--box">
            <p className="entry--date">Nov 18, 2022</p>
            <h2 className="entry--header">Motto</h2>
            <p className="loggedjournalnotes">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </p>
          </article>
          <article className="entry--box">
            <p className="entry--date">Nov 18, 2022</p>
            <h2 className="entry--header">Motto</h2>
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
