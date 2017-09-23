    create table UserAuthority (
        authority varchar(255) not null,
        user_id varchar(255) not null,
        primary key (user_id, authority)
    ) ENGINE=InnoDB;
    create table user_account (
        id varchar(255) not null,
        accessToken varchar(255) not null,
        accountEnabled boolean not null,
        accountExpired boolean not null,
        accountLocked boolean not null,
        credentialsExpired boolean not null,
        providerId varchar(255) not null,
        providerUserId varchar(255) not null,
        username varchar(30) not null,
        primary key (id),
        unique (username)
    ) ENGINE=InnoDB;
  alter table UserAuthority 
        add index FKFCA37F9810A9E306 (user_id), 
        add constraint FKFCA37F9810A9E306 
        foreign key (user_id) 
        references user_account (id);