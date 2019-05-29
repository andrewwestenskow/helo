select word from words
join favorite_words
on words.words_id = favorite_words.words_id
join helo_users
on favorite_words.helo_users_id = helo_users.helo_users_id
where helo_users.username = ($1)