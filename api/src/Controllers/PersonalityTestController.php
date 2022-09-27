<?php
namespace Src\Controllers;

use Src\Models\PersonalityTestModel;

class PersonalityTestController {

    private $db;
    private $requestMethod;
    private $username;
    private $password;

    public function __construct($db, $requestMethod, $username, $password)
    {
        $this->db = $db;
        $this->requestMethod = $requestMethod;
        $this->username = $username;
        $this->password = $password;

        $this->personalityTest = new PersonalityTestModel($db);
    }

    public function processRequest()
    {
        if ($this->requestMethod == 'GET') {
            if ($this->username && $this->password) {
                $response = $this->getUserInfo($this->username, $this->password);
            } else {
                $response = $this->getAllData();
            };
        }        
        else {       
            $response = $this->notFoundResponse();
        }

        header($response['status_code_header']);
        if ($response['body']) {
            echo $response['body'];
        }
    }

    private function getAllData()
    {
        $result = $this->personalityTest->findAll();
        $response['status_code_header'] = 'HTTP/1.1 200 OK';
        $response['body'] = json_encode($result);
        return $response;
    }

    private function getUserInfo($username, $password)
    {
        $result = $this->personalityTest->findUser($username, $password);
        $response['status_code_header'] = 'HTTP/1.1 200 OK';
        $response['body'] = json_encode($result);
        return $response;
    }

    private function notFoundResponse()
    {
        $response['status_code_header'] = 'HTTP/1.1 404 Not Found';
        $response['body'] = null;
        return $response;
    }
}
?>