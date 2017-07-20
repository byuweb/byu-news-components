<?php
$endpoint = new stdClass();
$endpoint->disabled = FALSE; /* Edit this to true to make a default endpoint disabled initially */
$endpoint->api_version = 3;
$endpoint->name = 'api';
$endpoint->server = 'rest_server';
$endpoint->path = 'api';
$endpoint->authentication = array();
$endpoint->server_settings = array(
    'formatters' => array(
        'json' => TRUE,
        'jsonp' => TRUE,
        'xml' => TRUE,
        'bencode' => FALSE,
        'php' => FALSE,
    ),
    'parsers' => array(
        'application/json' => TRUE,
        'application/x-www-form-urlencoded' => TRUE,
        'application/xml' => TRUE,
        'multipart/form-data' => TRUE,
        'text/xml' => TRUE,
    ),
);
$endpoint->resources = array(
    'Categories' => array(
        'operations' => array(
            'index' => array(
                'enabled' => '1',
            ),
        ),
    ),
    'CategoryCounts' => array(
        'operations' => array(
            'index' => array(
                'enabled' => '1',
            ),
        ),
    ),
    'Stories' => array(
        'operations' => array(
            'index' => array(
                'enabled' => '1',
            ),
        ),
    ),
    'Story' => array(
        'operations' => array(
            'index' => array(
                'enabled' => '1',
            ),
        ),
    ),
    'TagCounts' => array(
        'operations' => array(
            'index' => array(
                'enabled' => '1',
            ),
        ),
    ),
    'Tags' => array(
        'operations' => array(
            'index' => array(
                'enabled' => '1',
            ),
        ),
    ),
);
$endpoint->debug = 1;
