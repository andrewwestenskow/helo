insert into helo_users (username, password, image)
values ($1, $2, $3) returning *