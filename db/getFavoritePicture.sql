select * from favorite_picture
join helo_users
on favorite_picture.helo_users_id = helo_users.helo_users_id
where helo_users.username = ($1)