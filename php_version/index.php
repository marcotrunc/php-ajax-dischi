<?php
// Import from db
include __DIR__ . '/includes/data/data.php';

?>


<!DOCTYPE html>
<html lang="en">

<?php include __DIR__ . '/includes/template/head.php' ?>

<body>


    <!-- Header -->
    <?php include __DIR__ . '/includes/template/header.php' ?>
    <!-- Main -->
    <main>
        <div class="container p-4">
            <div class="row gy-4">
                <?php foreach ($database as $disc) : ?>
                    <div class="col-2">
                        <?php include __DIR__ . '/includes/template/card.php' ?>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </main>
</body>

</html>