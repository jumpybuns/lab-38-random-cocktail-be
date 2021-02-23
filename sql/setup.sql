DROP TABLE IF EXISTS cocktails;

CREATE TABLE cocktails (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name TEXT NOT NULL,
  glass TEXT,
  recipe TEXT NOT NULL,
  ingredient1 TEXT,
  measure1 TEXT,
  ingredient2 TEXT,
  measure2 TEXT,
  ingredient3 TEXT,
  measure3 TEXT,
  ingredient4 TEXT,
  measure4 TEXT,
)