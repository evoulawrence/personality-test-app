<?php
namespace Src\Controllers;

use Src\Models\LoginModel;

class LoginController {

    private $db;
    private $requestMethod;

    public function __construct($db, $requestMethod)
    {
        $this->db = $db;
        $this->requestMethod = $requestMethod;

        $this->login = new LoginModel($db);
    }

    public function processRequest()
    {
        if ($this->requestMethod == 'GET') {
            $response = $this->getUserInfo();
        }        
        else {       
            $response = $this->notFoundResponse();
        }

        header($response['status_code_header']);
        if ($response['body']) {
            echo $response['body'];
        }
    }

    private function getUserInfo()
    {
        $result = $this->login->findUser();
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