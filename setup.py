from setuptools import setup, find_packages

setup(
    name='spoofing-test',                     # Name of your package
    version='0.1.0',                          # Version of your package
    packages=find_packages(),
    include_package_data=True,  # Include non-Python files                 # Automatically find all packages
    install_requires=[                        # External dependencies
        'requests',                           # Example of a dependency
    ],
    description='spoofing javascript api',
    long_description=open('README.md').read(),  # Read the README file
    long_description_content_type='text/markdown',
    author='MO7AMED DEV',
    author_email='medhasnaoui833@gmail.com',
    url='https://github.com/Mo7amedDev/jsSpoofingAPI.git',  # URL to the GitHub repository
    classifiers=[
        'Programming Language :: Python :: 3',
        'License :: OSI Approved :: MIT License',
        'Operating System :: OS Independent',
    ],
)
