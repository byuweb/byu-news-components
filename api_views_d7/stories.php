<?php
$view = new view();
$view->name = 'stories_api';
$view->description = '';
$view->tag = 'default';
$view->base_table = 'node';
$view->human_name = 'Stories API';
$view->core = 7;
$view->api_version = '3.0';
$view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */

/* Display: Master */
$handler = $view->new_display('default', 'Master', 'default');
$handler->display->display_options['use_more_always'] = FALSE;
$handler->display->display_options['group_by'] = TRUE;
$handler->display->display_options['access']['type'] = 'none';
$handler->display->display_options['cache']['type'] = 'none';
$handler->display->display_options['query']['type'] = 'views_query';
$handler->display->display_options['exposed_form']['type'] = 'basic';
$handler->display->display_options['pager']['type'] = 'some';
$handler->display->display_options['pager']['options']['items_per_page'] = '0';
$handler->display->display_options['pager']['options']['offset'] = '0';
$handler->display->display_options['style_plugin'] = 'default';
$handler->display->display_options['row_plugin'] = 'fields';
/* Relationship: Content: Thumbnail Image (375px x 230px) (field_feature_image:fid) */
$handler->display->display_options['relationships']['field_feature_image_fid']['id'] = 'field_feature_image_fid';
$handler->display->display_options['relationships']['field_feature_image_fid']['table'] = 'field_data_field_feature_image';
$handler->display->display_options['relationships']['field_feature_image_fid']['field'] = 'field_feature_image_fid';
$handler->display->display_options['relationships']['field_feature_image_fid']['label'] = 'Thumbnail';
/* Relationship: Content: Masthead Image (Width: 1600px, Min Height: 230px - Max Height: 600px) (field_headliner_image:fid) */
$handler->display->display_options['relationships']['field_headliner_image_fid']['id'] = 'field_headliner_image_fid';
$handler->display->display_options['relationships']['field_headliner_image_fid']['table'] = 'field_data_field_headliner_image';
$handler->display->display_options['relationships']['field_headliner_image_fid']['field'] = 'field_headliner_image_fid';
$handler->display->display_options['relationships']['field_headliner_image_fid']['label'] = 'Masthead';
/* Relationship: Content: Photos (field_photos:fid) */
$handler->display->display_options['relationships']['field_photos_fid']['id'] = 'field_photos_fid';
$handler->display->display_options['relationships']['field_photos_fid']['table'] = 'field_data_field_photos';
$handler->display->display_options['relationships']['field_photos_fid']['field'] = 'field_photos_fid';
$handler->display->display_options['relationships']['field_photos_fid']['label'] = 'Photos';
/* Field: Content: Nid */
$handler->display->display_options['fields']['nid']['id'] = 'nid';
$handler->display->display_options['fields']['nid']['table'] = 'node';
$handler->display->display_options['fields']['nid']['field'] = 'nid';
$handler->display->display_options['fields']['nid']['label'] = 'StoryId';
/* Field: Field: Title */
$handler->display->display_options['fields']['title_field']['id'] = 'title_field';
$handler->display->display_options['fields']['title_field']['table'] = 'field_data_title_field';
$handler->display->display_options['fields']['title_field']['field'] = 'title_field';
$handler->display->display_options['fields']['title_field']['link_to_entity'] = 0;
/* Field: Content: Path */
$handler->display->display_options['fields']['path']['id'] = 'path';
$handler->display->display_options['fields']['path']['table'] = 'node';
$handler->display->display_options['fields']['path']['field'] = 'path';
$handler->display->display_options['fields']['path']['label'] = 'FullUrl';
$handler->display->display_options['fields']['path']['absolute'] = TRUE;
/* Field: Content: Media Contact / Byline */
$handler->display->display_options['fields']['field_media_contact']['id'] = 'field_media_contact';
$handler->display->display_options['fields']['field_media_contact']['table'] = 'field_data_field_media_contact';
$handler->display->display_options['fields']['field_media_contact']['field'] = 'field_media_contact';
$handler->display->display_options['fields']['field_media_contact']['label'] = 'MediaContact';
$handler->display->display_options['fields']['field_media_contact']['settings'] = array(
    'link' => 0,
);
/* Field: Content: Writer */
$handler->display->display_options['fields']['field_author']['id'] = 'field_author';
$handler->display->display_options['fields']['field_author']['table'] = 'field_data_field_author';
$handler->display->display_options['fields']['field_author']['field'] = 'field_author';
$handler->display->display_options['fields']['field_author']['label'] = 'WriterName';
$handler->display->display_options['fields']['field_author']['settings'] = array(
    'link' => 0,
);
/* Field: Content: Post date */
$handler->display->display_options['fields']['created']['id'] = 'created';
$handler->display->display_options['fields']['created']['table'] = 'node';
$handler->display->display_options['fields']['created']['field'] = 'created';
$handler->display->display_options['fields']['created']['label'] = 'DatePublished';
$handler->display->display_options['fields']['created']['date_format'] = 'custom';
$handler->display->display_options['fields']['created']['custom_date_format'] = 'M-d-Y';
$handler->display->display_options['fields']['created']['second_date_format'] = 'long';
/* Field: Content: Updated date */
$handler->display->display_options['fields']['changed']['id'] = 'changed';
$handler->display->display_options['fields']['changed']['table'] = 'node';
$handler->display->display_options['fields']['changed']['field'] = 'changed';
$handler->display->display_options['fields']['changed']['label'] = 'LastUpdated';
$handler->display->display_options['fields']['changed']['date_format'] = 'custom';
$handler->display->display_options['fields']['changed']['custom_date_format'] = 'M-d-Y';
$handler->display->display_options['fields']['changed']['second_date_format'] = 'long';
/* Field: Content: Promoted to front page */
$handler->display->display_options['fields']['promote']['id'] = 'promote';
$handler->display->display_options['fields']['promote']['table'] = 'node';
$handler->display->display_options['fields']['promote']['field'] = 'promote';
$handler->display->display_options['fields']['promote']['label'] = 'IsFeatured';
$handler->display->display_options['fields']['promote']['type'] = 'true-false';
$handler->display->display_options['fields']['promote']['not'] = 0;
/* Field: File: Path */
$handler->display->display_options['fields']['uri']['id'] = 'uri';
$handler->display->display_options['fields']['uri']['table'] = 'file_managed';
$handler->display->display_options['fields']['uri']['field'] = 'uri';
$handler->display->display_options['fields']['uri']['relationship'] = 'field_feature_image_fid';
$handler->display->display_options['fields']['uri']['label'] = 'FeaturedImgUrl';
$handler->display->display_options['fields']['uri']['file_download_path'] = TRUE;
/* Field: File: Path */
$handler->display->display_options['fields']['uri_1']['id'] = 'uri_1';
$handler->display->display_options['fields']['uri_1']['table'] = 'file_managed';
$handler->display->display_options['fields']['uri_1']['field'] = 'uri';
$handler->display->display_options['fields']['uri_1']['relationship'] = 'field_headliner_image_fid';
$handler->display->display_options['fields']['uri_1']['label'] = 'MastheadUrl';
$handler->display->display_options['fields']['uri_1']['file_download_path'] = TRUE;
/* Field: Content: Photos */
$handler->display->display_options['fields']['field_photos']['id'] = 'field_photos';
$handler->display->display_options['fields']['field_photos']['table'] = 'field_data_field_photos';
$handler->display->display_options['fields']['field_photos']['field'] = 'field_photos';
$handler->display->display_options['fields']['field_photos']['click_sort_column'] = 'fid';
$handler->display->display_options['fields']['field_photos']['type'] = 'image_url';
$handler->display->display_options['fields']['field_photos']['settings'] = array(
    'url_type' => '0',
    'image_style' => '',
    'image_link' => '',
);
$handler->display->display_options['fields']['field_photos']['group_column'] = 'entity_id';
$handler->display->display_options['fields']['field_photos']['delta_offset'] = '0';
/* Field: Tags */
$handler->display->display_options['fields']['term_node_tid']['id'] = 'term_node_tid';
$handler->display->display_options['fields']['term_node_tid']['table'] = 'node';
$handler->display->display_options['fields']['term_node_tid']['field'] = 'term_node_tid';
$handler->display->display_options['fields']['term_node_tid']['ui_name'] = 'Tags';
$handler->display->display_options['fields']['term_node_tid']['label'] = 'Tags';
$handler->display->display_options['fields']['term_node_tid']['alter']['strip_tags'] = TRUE;
$handler->display->display_options['fields']['term_node_tid']['link_to_taxonomy'] = FALSE;
$handler->display->display_options['fields']['term_node_tid']['limit'] = TRUE;
$handler->display->display_options['fields']['term_node_tid']['vocabularies'] = array(
    'tags' => 'tags',
    'address_book' => 0,
    'media_folders' => 0,
    'news_category' => 0,
    'newsletter_categories' => 0,
    'youtube_tags' => 0,
);
/* Field: Tag IDs */
$handler->display->display_options['fields']['term_node_tid_2']['id'] = 'term_node_tid_2';
$handler->display->display_options['fields']['term_node_tid_2']['table'] = 'node';
$handler->display->display_options['fields']['term_node_tid_2']['field'] = 'term_node_tid';
$handler->display->display_options['fields']['term_node_tid_2']['ui_name'] = 'Tag IDs';
$handler->display->display_options['fields']['term_node_tid_2']['label'] = 'TagIds';
$handler->display->display_options['fields']['term_node_tid_2']['alter']['alter_text'] = TRUE;
$handler->display->display_options['fields']['term_node_tid_2']['alter']['text'] = '[term_node_tid_2-tid]';
$handler->display->display_options['fields']['term_node_tid_2']['link_to_taxonomy'] = FALSE;
$handler->display->display_options['fields']['term_node_tid_2']['limit'] = TRUE;
$handler->display->display_options['fields']['term_node_tid_2']['vocabularies'] = array(
    'tags' => 'tags',
    'address_book' => 0,
    'media_folders' => 0,
    'news_category' => 0,
    'newsletter_categories' => 0,
    'youtube_tags' => 0,
);
/* Field: Category */
$handler->display->display_options['fields']['term_node_tid_4']['id'] = 'term_node_tid_4';
$handler->display->display_options['fields']['term_node_tid_4']['table'] = 'node';
$handler->display->display_options['fields']['term_node_tid_4']['field'] = 'term_node_tid';
$handler->display->display_options['fields']['term_node_tid_4']['ui_name'] = 'Category';
$handler->display->display_options['fields']['term_node_tid_4']['label'] = 'Categories';
$handler->display->display_options['fields']['term_node_tid_4']['link_to_taxonomy'] = FALSE;
$handler->display->display_options['fields']['term_node_tid_4']['limit'] = TRUE;
$handler->display->display_options['fields']['term_node_tid_4']['vocabularies'] = array(
    'newsletter_categories' => 'newsletter_categories',
    'address_book' => 0,
    'media_folders' => 0,
    'news_category' => 0,
    'tags' => 0,
    'youtube_tags' => 0,
);
/* Field: Category IDs */
$handler->display->display_options['fields']['term_node_tid_5']['id'] = 'term_node_tid_5';
$handler->display->display_options['fields']['term_node_tid_5']['table'] = 'node';
$handler->display->display_options['fields']['term_node_tid_5']['field'] = 'term_node_tid';
$handler->display->display_options['fields']['term_node_tid_5']['ui_name'] = 'Category IDs';
$handler->display->display_options['fields']['term_node_tid_5']['label'] = 'CategoryIds';
$handler->display->display_options['fields']['term_node_tid_5']['alter']['alter_text'] = TRUE;
$handler->display->display_options['fields']['term_node_tid_5']['alter']['text'] = '[term_node_tid_5-tid]';
$handler->display->display_options['fields']['term_node_tid_5']['link_to_taxonomy'] = FALSE;
$handler->display->display_options['fields']['term_node_tid_5']['limit'] = TRUE;
$handler->display->display_options['fields']['term_node_tid_5']['vocabularies'] = array(
    'newsletter_categories' => 'newsletter_categories',
    'address_book' => 0,
    'media_folders' => 0,
    'news_category' => 0,
    'tags' => 0,
    'youtube_tags' => 0,
);
/* Sort criterion: Content: Post date */
$handler->display->display_options['sorts']['created']['id'] = 'created';
$handler->display->display_options['sorts']['created']['table'] = 'node';
$handler->display->display_options['sorts']['created']['field'] = 'created';
$handler->display->display_options['sorts']['created']['order'] = 'DESC';
/* Contextual filter: Category ID */
$handler->display->display_options['arguments']['tid']['id'] = 'tid';
$handler->display->display_options['arguments']['tid']['table'] = 'taxonomy_index';
$handler->display->display_options['arguments']['tid']['field'] = 'tid';
$handler->display->display_options['arguments']['tid']['ui_name'] = 'Category ID';
$handler->display->display_options['arguments']['tid']['default_action'] = 'default';
$handler->display->display_options['arguments']['tid']['default_argument_type'] = 'php';
$handler->display->display_options['arguments']['tid']['default_argument_options']['code'] = '$categories= $_GET[\'categories\'];
$categories = strtolower($categories);
if($categories == \'all\') {
$categories == \'2974,2975,2976,2996,2997\';
}
$categoriesList = str_replace(" ","+", $categories);
return $categoriesList;';
$handler->display->display_options['arguments']['tid']['summary']['number_of_records'] = '0';
$handler->display->display_options['arguments']['tid']['summary']['format'] = 'default_summary';
$handler->display->display_options['arguments']['tid']['summary_options']['items_per_page'] = '25';
$handler->display->display_options['arguments']['tid']['break_phrase'] = TRUE;
/* Contextual filter: Tags */
$handler->display->display_options['arguments']['tid_2']['id'] = 'tid_2';
$handler->display->display_options['arguments']['tid_2']['table'] = 'taxonomy_index';
$handler->display->display_options['arguments']['tid_2']['field'] = 'tid';
$handler->display->display_options['arguments']['tid_2']['ui_name'] = 'Tags';
$handler->display->display_options['arguments']['tid_2']['default_action'] = 'default';
$handler->display->display_options['arguments']['tid_2']['default_argument_type'] = 'php';
$handler->display->display_options['arguments']['tid_2']['default_argument_options']['code'] = '$tags= $_GET[\'tags\'];
$tags = strtolower($tags);
if($tags == \'all\') {
$tags == \'all\';
}
$tagsList = str_replace(" ","+", $tags);
return $tagsList;';
$handler->display->display_options['arguments']['tid_2']['summary']['number_of_records'] = '0';
$handler->display->display_options['arguments']['tid_2']['summary']['format'] = 'default_summary';
$handler->display->display_options['arguments']['tid_2']['summary_options']['items_per_page'] = '25';
$handler->display->display_options['arguments']['tid_2']['break_phrase'] = TRUE;
/* Filter criterion: Content: Published */
$handler->display->display_options['filters']['status']['id'] = 'status';
$handler->display->display_options['filters']['status']['table'] = 'node';
$handler->display->display_options['filters']['status']['field'] = 'status';
$handler->display->display_options['filters']['status']['value'] = 1;
$handler->display->display_options['filters']['status']['group'] = 1;
$handler->display->display_options['filters']['status']['expose']['operator'] = FALSE;
/* Filter criterion: Content: Type */
$handler->display->display_options['filters']['type']['id'] = 'type';
$handler->display->display_options['filters']['type']['table'] = 'node';
$handler->display->display_options['filters']['type']['field'] = 'type';
$handler->display->display_options['filters']['type']['value'] = array(
    'story' => 'story',
);
/* Filter criterion: Content: Updated date */
$handler->display->display_options['filters']['changed']['id'] = 'changed';
$handler->display->display_options['filters']['changed']['table'] = 'node';
$handler->display->display_options['filters']['changed']['field'] = 'changed';
$handler->display->display_options['filters']['changed']['operator'] = 'between';
$handler->display->display_options['filters']['changed']['exposed'] = TRUE;
$handler->display->display_options['filters']['changed']['expose']['operator_id'] = 'changed_op';
$handler->display->display_options['filters']['changed']['expose']['label'] = 'Updated date';
$handler->display->display_options['filters']['changed']['expose']['operator'] = 'changed_op';
$handler->display->display_options['filters']['changed']['expose']['identifier'] = 'updated';
$handler->display->display_options['filters']['changed']['expose']['remember_roles'] = array(
    2 => '2',
    1 => 0,
    3 => 0,
    4 => 0,
    5 => 0,
    6 => 0,
);

/* Display: Services */
$handler = $view->new_display('services', 'Services', 'services_1');
$handler->display->display_options['path'] = 'Stories';
