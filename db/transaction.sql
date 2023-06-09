SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";

CREATE TABLE `transaction` (
  `id` bigint(20) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `card_number` bigint(20) NOT NULL,
  `destination` bigint(20) NOT NULL,
  `transaction_detail` varchar(255) NOT NULL
  
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

ALTER TABLE `transaction`
  ADD PRIMARY KEY (`id`);
--
ALTER TABLE `transaction`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
COMMIT;
