---
id: faq
title: Frequently Asked Questions
sidebar_label: Frequently Asked Questions 
slug: /faq
---

- Scope, schedule and location of backups

    _Database backups is stored on the cloud server(Digital Ocean Ubuntu) with a automated schedule of M-F at 11am and 11pm(twice a day). Backup process is completely automated by crob job._

- Backup methods and data formats

    _Database backup utilizes MYSQL's built-in `mysqldump`. A custom script automatically transforms it to gzip format to further minimize storage use_

    refer: https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html

- Retention periods for backups

    _Database backup retains at 30 days. Exceeding 30 day old backup will be deleted automatically by our custom script._

- How the integrity of backups will be verified

    _MYSQL's reputation will be questioned in case of failure._

- Restoration and testing procedures, including restoration timescales during a disruptive event

    _Backups could be restored in a snap. Backup integrity is on MYSQL_

- Use of encryption

    _We have 2 types of supported encryption. A Basic Encryption where it could be decrypted(Example: Government Ids) and Hash, an opposite of basic encryption(Example: password)_

    Used Libraries:

    ```
    Encryption: crypto
    Hash: bcrypt
    ```

- How backups are segregated in a multi-tenant cloud environment

    _This doesn't apply to us_

- Frequency and method of reviews of backup and recovery procedures

    _This is completely automated with full trust to MYSQL in terms of integrity._