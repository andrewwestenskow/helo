select * from favorite_picture
where helo_users_id =
(select helo_users_id from helo_users where helo_users.username  = ($1))