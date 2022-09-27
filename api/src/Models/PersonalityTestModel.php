<?php
namespace Src\Models;

class PersonalityTestModel {

    private $db = null;

    public function __construct($db)
    {
        $this->db = $db;
    }

    /**
     * To get database results
     *
     * @return array
     */
    public function findAll()
    {
        try {
            
            $statement = "SELECT *,
                questions.description AS qdesc
                FROM 
                questions 
                INNER JOIN 
                answers
                ON 
                answers.question_id = questions.id"
            ;

            $statement = $this->db->prepare($statement);
            $statement->execute();
            $dataRows = $statement->get_result();
            $data = array();
        
            if(!empty($dataRows))
            {
                foreach($dataRows as $row)
                {
                    $questionId = $row['question_number'];
                    if (isset($data[$questionId])) {
                        $dataRow = $data[$questionId];
                    }
                    else {
                        $dataRow= array(
                            'id' => $questionId,
                            'question_number' => $row['question_number'],
                            'description' => $row['qdesc'],
                            'answers' => array()
                        );
                    }

                    $dataRow['answers'][] = array(
                        'id' => $row['id'],
                        'question_id' => $row['question_id'],
                        'option_label' => $row['option_label'],
                        'description' => $row['description'],
                        'personality_type' => $row['personality_type']
                        
                    ); 
                    $data[$questionId] = $dataRow;
                }
            }
        
        return $data;
        } catch (\Exception $e) {
            exit($e->getMessage());
        }  
    }

    public function findUser($username, $password)
    {
        try {
            
            $statement = "SELECT username, userPassword FROM users WHERE username = ? AND userPassword = ?";
            $statement = $this->db->prepare($statement);
            $statement->bind_param("ss", $username, $password);
            $statement->execute();
            $result = $statement->get_result();
            $data = $result->fetch_assoc();
        
        return $data;
        } catch (\Exception $e) {
            exit($e->getMessage());
        }  
    }
}

?>