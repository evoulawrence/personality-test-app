<?php
namespace Src\Models;

class LoginModel {

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
    public function getUser()
    {
        try {
            
            $statement = "SELECT *,
                
                FROM 
                users 
                WHERE 
                username = 'mendy' AND userpassword = 'test'"
            ;

            $statement = $this->db->prepare($statement);
            $statement->execute();
            $data = $statement->get_result();
        
        return $data;
        } catch (\Exception $e) {
            exit($e->getMessage());
        }  
    }
}

?>