select * from favorite_words
join words
on favorite_words.words_id = words.words_id
where helo_users_id = 
(select helo_users_id from helo_users where username = ($1))