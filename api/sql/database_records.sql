-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 19, 2022 at 11:45 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `personality_test`
--

-- --------------------------------------------------------

--
-- Table structure for table `answers`
--

CREATE TABLE `answers` (
  `id` int(11) NOT NULL,
  `question_id` int(11) NOT NULL,
  `option_label` varchar(5) NOT NULL,
  `description` varchar(255) NOT NULL,
  `personality_type` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `answers`
--

INSERT INTO `answers` (`id`, `question_id`, `option_label`, `description`, `personality_type`) VALUES
(1, 1, 'A', 'Don’t dare to interrupt them', 'Introvert'),
(2, 1, 'B', 'Think it’s more important to give them some of your time; work can wait', 'Introvert'),
(3, 1, 'C', 'Listen, but with only with half an ear', 'Extrovert'),
(4, 1, 'D', 'Interrupt and explain that you are really busy at the moment', 'Extrovert'),
(5, 2, 'A', 'Look at your watch every two minutes', 'Introvert'),
(6, 2, 'B', 'Bubble with inner anger, but keep quiet', 'Introvert'),
(7, 2, 'C', 'Explain to other equally impatient people in the room that the doctor is always running late', 'Extrovert'),
(8, 2, 'D', 'Complain in a loud voice, while tapping your foot impatiently', 'Extrovert'),
(9, 3, 'A', 'Don’t dare contradict them', 'Introvert'),
(10, 3, 'B', 'Think that they are obviously right', 'Introvert'),
(11, 3, 'C', 'Defend your own point of view, tooth and nail', 'Extrovert'),
(12, 3, 'D', 'Continuously interrupt your colleague', 'Extrovert'),
(13, 4, 'A', 'Are a bit too far towards the back so don’t really hear what the guide is saying', 'Introvert'),
(14, 4, 'B', 'Follow the group without question', 'Introvert'),
(15, 4, 'C', 'Make sure that everyone is able to hear properly', 'Extrovert'),
(16, 4, 'D', 'Are right up the front, adding your own comments in a loud voice', 'Extrovert'),
(17, 5, 'A', 'Ask you to tell a story in front of everyone else', 'Introvert'),
(18, 5, 'B', 'Talk privately between themselves', 'Introvert'),
(19, 5, 'C', 'Hang around you all evening', 'Extrovert'),
(20, 5, 'D', 'Always drag the conversation back to themselves', 'Extrovert');

-- --------------------------------------------------------

--
-- Table structure for table `questions`
--

CREATE TABLE `questions` (
  `id` int(11) NOT NULL,
  `question_number` int(11) NOT NULL,
  `description` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `questions`
--

INSERT INTO `questions` (`id`, `question_number`, `description`) VALUES
(1, 1, 'You’re really busy at work and a colleague is telling you their life story and personal woes. You:'),
(2, 2, 'You’ve been sitting in the doctor’s waiting room for more than 25 minutes. You:'),
(3, 3, 'You’re having an animated discussion with a colleague regarding a project that you’re in charge of. You:'),
(4, 4, 'You are taking part in a guided tour of a museum. You:'),
(5, 5, 'During dinner parties at your home, you have a hard time with people who:');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `answers`
--
ALTER TABLE `answers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `questions`
--
ALTER TABLE `questions`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `answers`
--
ALTER TABLE `answers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `questions`
--
ALTER TABLE `questions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
