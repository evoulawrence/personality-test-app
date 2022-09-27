--
-- Database: `personality_test`
--

-- --------------------------------------------------------

--
-- Table structure for table `questions`
--

CREATE TABLE IF NOT EXISTS questions (
    id INT NOT NULL,
    question_number INT NOT NULL,
    description VARCHAR(255) NOT NULL
) ENGINE=INNODB DEFAULT CHARSET=utf8;


--
-- Table structure for table `answers`
--

CREATE TABLE IF NOT EXISTS answers (
    id INT NOT NULL,
    description VARCHAR(225) NOT NULL,
    personality_type VARCHAR(50) NOT NULL,
    option_label VARCHAR (10) NOT NULL,
    question_id INT NOT NULL
) ENGINE=INNODB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `questions`
--
ALTER TABLE `questions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `answers`
--
ALTER TABLE `answers`
  ADD PRIMARY KEY (`id`);

