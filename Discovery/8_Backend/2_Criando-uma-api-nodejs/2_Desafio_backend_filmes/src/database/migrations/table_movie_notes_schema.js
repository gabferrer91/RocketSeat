const movie_notes = `
CREATE TABLE IF NOT EXISTS movie_notes (
    id           INTEGER        PRIMARY KEY AUTOINCREMENT
  , title        VARCHAR(255)   NOT NULL
  , description  VARCHAR(255)   NOT NULL
  , rating       INTEGER        CHECK(RATING IN (1,2,3,4,5,6,7,8,9,10))
  , user_id      INTEGER        NOT NULL REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE
  , created_at   DATETIME       DEFAULT CURRENT_TIMESTAMP
  , updated_at   DATETIME       DEFAULT CURRENT_TIMESTAMP
  );
`

module.exports = {movie_notes}

