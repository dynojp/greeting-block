<p <?php echo get_block_wrapper_attributes(); ?>>
  <?php
    $greeting = 'こんにちは';

    $browser_lang = mb_substr($_SERVER['HTTP_ACCEPT_LANGUAGE'], 0, 2);
    if (!empty($browser_lang)) {
      switch ($browser_lang) {
        case 'en':
          $greeting = 'Hello';
          break;
        case 'fr':
          $greeting = 'Bonjour';
          break;
        case 'it':
          $greeting = 'Ciao';
          break;
        case 'zh':
          $greeting = '你好';
          break;
      }
    }

    echo esc_html($greeting);
  ?>
</p>
