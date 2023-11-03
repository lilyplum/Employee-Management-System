create table managers (
                          id SERIAL primary key,
                          first_name VARCHAR(50),
                          last_name VARCHAR(50),
                          company VARCHAR(50),
                          city VARCHAR(50),
                          postal_code VARCHAR(50)
);
insert into managers (first_name, last_name, company, city, postal_code) values ('Boigie', 'Janisson', 'InnoZ', 'Aginskoye', '663580');
insert into managers (first_name, last_name, company, city, postal_code) values ('Olav', 'Whitmore', 'Realcube', 'Tulsa', '74108');
