<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RolePermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $roleUser = Role::findByName('User');
        $roleAdmin = Role::findByName('Admin');
        $permissionProductList = Permission::findByName('product-list')->assignRole($roleAdmin)->assignRole($roleUser);
        $permissionProductCreate = Permission::findByName('product-create')->assignRole($roleAdmin)->assignRole($roleUser);
        $permissionProductEdit = Permission::findByName('product-edit')->assignRole($roleAdmin);
        $permissionProductDelete = Permission::findByName('product-delete')->assignRole($roleAdmin)->assignRole($roleUser);
    }
}
