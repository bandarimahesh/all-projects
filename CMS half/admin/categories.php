<?php include "includes/admin_header.php"; ?>
    <div id="wrapper">

        <!-- Navigation -->
  <?php include "includes/admin_nav.php"; ?>

        <div id="page-wrapper">

            <div class="container-fluid">

                <!-- Page Heading -->
                <div class="row">
                    <div class="col-xs-12">
                        <h1 class="page-header">
                            Welcome to Admin
                            <small>Author</small>
                        </h1>
                      <div class="col-xs-6">
<?php

insert_categories();
 ?>
  <form class="" action="" method="post">
                      <div class="form-group">
                        <label for="cat_title">Add Category:</label>
               <input class="form-control" type="text" name="cat_title" value="">
                      </div>
                      <div class="form-group">
               <input class="btn btn-primary" type="submit" name="submit" value="Add category">
                      </div>
                        </form>


                        <?php
                        if(isset($_GET['edit'])) {
                        $cat_id = $_GET['edit'];
                        include "includes/update_categories.php";
                        }

                         ?>

                    </div>
                    <div class="col-xs-6">

              <table class="table table-bordered table-hover">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Category Title</th>
                    <th>Delete</th>
                      <th>Edit</th>
                  </tr>
                  <tbody>
                    <tr>
                      <!-- inserting data in to table -->
                      <?php
              findAllCategories();
                           ?>
<!-- delete query -->
                           <?php
              deleteCategories();
                        ?>
                    </tr>
                  </tbody>
                </thead>
              </table>
                    </div>
                </div>
                <!-- /.row -->

            </div>


            <!-- /.container-fluid -->

        </div>
        <!-- /#page-wrapper -->
<?php include "includes/admin_footer.php"; ?>
